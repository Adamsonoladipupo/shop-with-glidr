package com.productservice.glidr.service;

import com.productservice.glidr.Kafka.EventPublisher;
import com.productservice.glidr.Kafka.KafkaTopics;
import com.productservice.glidr.dtos.POSIntegrationDtos;
import com.productservice.glidr.event.InventoryUpdateEvent;
import com.productservice.glidr.event.ProductSyncedEvent;
import com.productservice.glidr.event.ReceiptCreatedEvent;
import com.productservice.glidr.exception.NotFoundException;
import com.productservice.glidr.model.POSIntegration;
import com.productservice.glidr.pos.*;
import com.productservice.glidr.repository.POSIntegrationRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;


@Service
@RequiredArgsConstructor
@Slf4j
public class POSIntegrationService {

    private final POSIntegrationRepository posIntegrationRepository;
    private final PosClientResolver posClientResolver;
    private final EventPublisher eventPublisher;

    public POSIntegrationDtos.PosIntegrationResponse connectPOS(POSIntegrationDtos.ConnectPosRequest request) {
        POSIntegration integration = posIntegrationRepository.findByStoreId(request.storeId())
                .orElseGet(POSIntegration::new);
        integration.setStoreId(request.storeId());
        integration.setProvider(request.provider());
        integration.setApiPublicKey(request.apiPublicKey());
        integration.setApiSecretKey(request.apiSecretKey());
        POSIntegration saved = posIntegrationRepository.save(integration);
        log.info("Connected POS provider={} for store={}", saved.getProvider(), saved.getStoreId());
        return new POSIntegrationDtos.PosIntegrationResponse(saved.getId(), saved.getStoreId(), saved.getProvider(), saved.getCreatedAt());
    }

    public POSIntegrationDtos.SyncResultResponse syncAll(String storeId) {
        int products = syncProducts(storeId);
        int inventory = fetchInventory(storeId);
        int receipts = fetchReceipts(storeId);
        return new POSIntegrationDtos.SyncResultResponse(storeId, products, inventory, receipts);
    }

    public int syncProducts(String storeId) {
        POSIntegration integration = getIntegration(storeId);
        PosClient client = posClientResolver.resolve(integration.getProvider());
        List<PosProductDto> products = client.fetchProducts(integration);
        products.forEach(p -> {
            ProductSyncedEvent event = new ProductSyncedEvent(
                    storeId, p.externalId(), p.name(), p.description(),
                    p.price(), p.quantity(), p.categoryLabel(), Instant.now());
            eventPublisher.publish(KafkaTopics.POS_PRODUCT_SYNCED, storeId, event);
        });
        log.info("Published {} ProductSyncedEvent(s) for store {}", products.size(), storeId);
        return products.size();
    }

    public int fetchInventory(String storeId) {
        POSIntegration integration = getIntegration(storeId);
        PosClient client = posClientResolver.resolve(integration.getProvider());
        List<PosInventoryDto> updates = client.fetchInventory(integration);
        updates.forEach(u -> {
            InventoryUpdateEvent event = new InventoryUpdateEvent(storeId, u.externalId(), u.quantity(), Instant.now());
            eventPublisher.publish(KafkaTopics.POS_INVENTORY_UPDATED, storeId, event);
        });
        log.info("Published {} InventoryUpdatedEvent(s) for store {}", updates.size(), storeId);
        return updates.size();
    }

    public int fetchReceipts(String storeId) {
        POSIntegration integration = getIntegration(storeId);
        PosClient client = posClientResolver.resolve(integration.getProvider());
        List<PosReceiptDto> receipts = client.fetchReceipts(integration);
        receipts.forEach(r -> {
            ReceiptCreatedEvent event = new ReceiptCreatedEvent(
                    storeId, r.loyaltyUserId(), r.receiptNumber(), r.purchasedDate(), r.totalPrice(),
                    r.items().stream().map(i -> new ReceiptCreatedEvent.LineItem(
                            i.externalProductId(), i.quantity(), i.unitPrice(), i.subTotal())).toList());
            eventPublisher.publish(KafkaTopics.POS_RECEIPT_CREATED, r.receiptNumber(), event);
        });
        log.info("Published {} ReceiptCreatedEvent(s) for store {}", receipts.size(), storeId);
        return receipts.size();
    }

    private POSIntegration getIntegration(String storeId) {
        return posIntegrationRepository.findByStoreId(storeId)
                .orElseThrow(() -> new NotFoundException("No POS connected for store: " + storeId));
    }
}
