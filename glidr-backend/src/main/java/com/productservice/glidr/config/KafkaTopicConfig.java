package com.productservice.glidr.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

import com.productservice.glidr.config.KafkaTopicConfig;

@Configuration
public class KafkaTopicConfig {

    public static final String POS_PRODUCT_SYNCED = "pos.product.synced";
    public static final String POS_INVENTORY_UPDATED = "pos.inventory.updated";
    public static final String POS_RECEIPT_CREATED = "pos.receipt.created";

    @Bean
    public NewTopic productSyncedTopic() {
        return TopicBuilder.name(KafkaTopicConfig.POS_PRODUCT_SYNCED).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic inventoryUpdatedTopic() {
        return TopicBuilder.name(KafkaTopicConfig.POS_INVENTORY_UPDATED).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic receiptCreatedTopic() {
        return TopicBuilder.name(KafkaTopicConfig.POS_RECEIPT_CREATED).partitions(3).replicas(1).build();
    }
}
