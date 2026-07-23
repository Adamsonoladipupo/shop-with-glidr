package com.productservice.glidr.dtos;

import lombok.Data;

@Data
public class UpdateStoreIntegrationRequest {
    private String baseUrl;
    private String apiKey;
    private String apiSecret;
    private String webhookSecret;
    private Boolean enabled;
}
