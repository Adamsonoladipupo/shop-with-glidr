package com.productservice.glidr.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "pos_integrations")
@Getter
@Setter
@NoArgsConstructor
public class POSIntegration {

    @Id
    private String id = UUID.randomUUID().toString();
    private String storeId;
    private String provider;
    private String apiPublicKey;
    private String apiSecretKey;
    private LocalDateTime createdAt = LocalDateTime.now();
}
