package com.productservice.glidr.dtos;

import com.productservice.glidr.enums.ProductStatus;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class ProductResponse {
    private String id;
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
    private ProductStatus status;
    private LocalDateTime lastSyncedAt;
}
