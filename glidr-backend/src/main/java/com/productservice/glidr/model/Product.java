package com.productservice.glidr.model;

import com.productservice.glidr.enums.ProductStatus;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

    @Id
    private String id;

    @Indexed
    private String storeId;

    @Indexed
    private String providerProductId;

    private String sku;
    private String barcode;
    private String name;
    private String description;
    private String brand;
    private String category;
    private String imageUrl;
    private BigDecimal sellingPrice;
    private BigDecimal costPrice;
    private Integer quantity;

    @Builder.Default
    private ProductStatus status = ProductStatus.ACTIVE;

    private LocalDateTime providerUpdatedAt;

    @Builder.Default
    private LocalDateTime lastSyncedAt = LocalDateTime.now();

}