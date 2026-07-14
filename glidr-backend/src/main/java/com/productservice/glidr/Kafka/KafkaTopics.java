package com.productservice.glidr.Kafka;

public final class KafkaTopics {
    public static final String POS_PRODUCT_SYNCED = "pos.product.synced";
    public static final String POS_INVENTORY_UPDATED = "pos.inventory.updated";
    public static final String POS_RECEIPT_CREATED = "pos.receipt.created";

    private KafkaTopics() {
    }
}
