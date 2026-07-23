package com.productservice.glidr.service;

import com.productservice.glidr.dtos.ReceiptDtos.*;
import com.productservice.glidr.model.Product;
import com.productservice.glidr.model.Receipt;
import com.productservice.glidr.model.ReceiptItem;
import com.productservice.glidr.event.ReceiptCreatedEvent;
import com.productservice.glidr.exception.NotFoundException;
import com.productservice.glidr.repository.ProductRepository;
import com.productservice.glidr.repository.ReceiptItemRepository;
import com.productservice.glidr.repository.ReceiptRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.ZoneOffset;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReceiptService {

    private final ReceiptRepository receiptRepository;
    private final ReceiptItemRepository receiptItemRepository;
    private final ProductRepository productRepository;

    public List<ReceiptResponse> getReceipts(String userId) {
        return receiptRepository.findByUserId(userId).stream().map(this::toResponse).toList();
    }

    public ReceiptDetailResponse getReceiptDetails(String receiptId) {
        Receipt receipt = receiptRepository.findById(receiptId)
                .orElseThrow(() -> new NotFoundException("Receipt not found: " + receiptId));

        List<ReceiptItemResponse> items = receiptItemRepository.findByReceiptId(receiptId).stream()
                .map(item -> new ReceiptItemResponse(
                        item.getProductId(),
                        item.getQuantity(),
                        item.getUnitPrice(),
                        item.getSubTotal()
                ))
                .toList();

        return new ReceiptDetailResponse(
                receipt.getId(),
                receipt.getUserId(),
                receipt.getReceiptNumber(),
                receipt.getPurchasedDate(),
                receipt.getTotalPrice(),
                receipt.getStatus(),
                items
        );
    }

    // Kafka handler - idempotent: skips if receiptNumber already exists in MongoDB.
    public void onReceiptCreated(ReceiptCreatedEvent event) {
        if (receiptRepository.findByReceiptNumber(event.receiptNumber()).isPresent()) {
            log.info("Receipt {} already processed, skipping", event.receiptNumber());
            return;
        }
        Receipt receipt = new Receipt();
        receipt.setUserId(event.userId());
        receipt.setReceiptNumber(event.receiptNumber());
        receipt.setPurchasedDate(event.purchasedDate().atZone(ZoneOffset.UTC).toLocalDateTime());
        receipt.setTotalPrice(event.totalPrice());
        receipt.setStatus("PAID");
        Receipt saved = receiptRepository.save(receipt);

        event.items().forEach(line -> {
            Product product = productRepository
                    .findByStoreIdAndProviderProductId(event.storeId(), line.externalProductId())
                    .orElse(null);
            ReceiptItem item = new ReceiptItem();
            item.setReceiptId(saved.getId());
            item.setProductId(product != null ? product.getId() : null);
            item.setQuantity(line.quantity());
            item.setUnitPrice(line.unitPrice());
            item.setSubTotal(line.subTotal());
            receiptItemRepository.save(item);
        });

        log.info("Persisted receipt {} with {} items for store {}", saved.getReceiptNumber(), event.items().size(), event.storeId());
    }

    private ReceiptResponse toResponse(Receipt r) {
        return new ReceiptResponse(r.getId(), r.getUserId(), r.getReceiptNumber(),
                r.getPurchasedDate(), r.getTotalPrice(), r.getStatus());
    }
}
