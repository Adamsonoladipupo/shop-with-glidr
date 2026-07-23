//package com.productservice.glidr.Kafka;
//
//import com.productservice.glidr.event.InventoryUpdateEvent;
//import com.productservice.glidr.event.ProductSyncedEvent;
//import com.productservice.glidr.event.ReceiptCreatedEvent;
//import com.productservice.glidr.service.ProductService;
//import com.productservice.glidr.service.ReceiptService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Component;
//
//@Component
//@RequiredArgsConstructor
//@Slf4j
//public class EasyShopEventListeners {
//    private final ProductService productService;
//    private final ReceiptService receiptService;
//
//    @KafkaListener(topics = KafkaTopics.POS_PRODUCT_SYNCED, groupId = "easyshop-backend")
//    public void handleProductSynced(ProductSyncedEvent event) {
//        log.debug("Received ProductSyncedEvent: store={} externalId={}", event.storeId(), event.externalId());
//        productService.onProductSynced(event);
//    }
//
//    @KafkaListener(topics = KafkaTopics.POS_INVENTORY_UPDATED, groupId = "easyshop-backend")
//    public void handleInventoryUpdated(InventoryUpdateEvent event) {
//        log.debug("Received InventoryUpdatedEvent: store={} externalId={}", event.storeId(), event.externalId());
//        productService.onInventoryUpdated(event);
//    }
//
//    @KafkaListener(topics = KafkaTopics.POS_RECEIPT_CREATED, groupId = "easyshop-backend")
//    public void handleReceiptCreated(ReceiptCreatedEvent event) {
//        log.debug("Received ReceiptCreatedEvent: store={} receiptNumber={}", event.storeId(), event.receiptNumber());
//        receiptService.onReceiptCreated(event);
//    }
//}
