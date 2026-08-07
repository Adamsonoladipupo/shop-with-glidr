package com.productservice.glidr.dtos;

import com.productservice.glidr.enums.POSProvider;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateStoreIntegrationRequest {
    @NotNull(message = "Provider is required.")
    private POSProvider provider;

    @NotBlank(message = "Base URL is required.")
    private String baseUrl;

    @NotBlank(message = "API Key is required.")
    private String apiKey;

    @NotBlank(message = "API Secret is required.")
    private String apiSecret;
}
