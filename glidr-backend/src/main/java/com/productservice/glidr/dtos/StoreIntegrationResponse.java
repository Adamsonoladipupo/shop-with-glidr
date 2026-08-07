package com.productservice.glidr.dtos;

import com.productservice.glidr.enums.IntegrationStatus;
import com.productservice.glidr.enums.POSProvider;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class StoreIntegrationResponse {
    private String id;
    private String storeId;
    private POSProvider provider;
    private String baseUrl;
    private IntegrationStatus status;
    private Boolean enabled;
    private LocalDateTime connectedAt;
    private LocalDateTime lastSuccessfulSync;
    private LocalDateTime lastWebhookReceived;
    private String lastSyncError;
    private ProductSummaryResponse productSummary;
}
