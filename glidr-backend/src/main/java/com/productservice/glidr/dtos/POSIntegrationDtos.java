package com.productservice.glidr.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public class POSIntegrationDtos {
    public record ConnectPosRequest(
            @NotNull String storeId,
            @NotBlank String provider,
            @NotBlank String apiPublicKey,
            @NotBlank String apiSecretKey
    ) {}

    public record PosIntegrationResponse(
            String id,
            String storeId,
            String provider,
            LocalDateTime createdAt
    ) {}

    public record SyncResultResponse(
            String storeId,
            int productsSynced,
            int inventoryUpdatesPublished,
            int receiptsSynced
    ) {}

    private POSIntegrationDtos() {}
}
