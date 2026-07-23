package com.productservice.glidr.dtos;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class SyncInventoryResponse {
    private int totalProductsFetched;
    private int newProducts;
    private int updatedProducts;
    private int deletedProducts;
    private LocalDateTime syncedAt;
    private String message;
}
