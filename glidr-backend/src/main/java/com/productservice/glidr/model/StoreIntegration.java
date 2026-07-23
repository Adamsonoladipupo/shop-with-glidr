package com.productservice.glidr.model;

import com.productservice.glidr.enums.IntegrationStatus;
import com.productservice.glidr.enums.InventoryProvider;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "store_integrations")
public class StoreIntegration {
    @Id
    private String id;
    private String storeId;
    private InventoryProvider provider;
    private String baseUrl;
    private String apiKey;
    private String apiSecret;
    private String webhookSecret;

    @Builder.Default
    private IntegrationStatus status = IntegrationStatus.PENDING;

    private LocalDateTime connectedAt;

    private LocalDateTime lastSuccessfulSync;

    private LocalDateTime lastWebhookReceived;

    private String lastSyncError;

    @Builder.Default
    private Boolean enabled = true;
}
