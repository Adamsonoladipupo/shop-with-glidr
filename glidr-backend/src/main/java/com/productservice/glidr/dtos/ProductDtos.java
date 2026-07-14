package com.productservice.glidr.dtos;

import java.math.BigDecimal;

public class ProductDtos {
    public record ProductResponse(
            String id,
            String storeId,
            String categoryId,
            String name,
            String description,
            BigDecimal price,
            Integer quantity,
            Integer shelfNumber,
            Integer aisleNumber
    ) {}

    public record ProductLocationResponse(
            String productId,
            String name,
            Integer aisleNumber,
            Integer shelfNumber
    ) {}

    private ProductDtos() {}
}

