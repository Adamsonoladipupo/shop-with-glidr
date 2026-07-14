package com.productservice.glidr.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public class StoreDtos {
    public record RegisterStoreRequest(
            @NotBlank
            String name,
            String address,
            String contactNumber,
            @NotNull
            String adminUserId
    ) {}

    public record StoreResponse(
            String id,
            String name,
            String address,
            String contactNumber,
            String adminUserId,
            LocalDateTime createdAt
    ) {}

    private StoreDtos() {}
}
