package com.productservice.glidr.pos;

import java.math.BigDecimal;

public record PosProductDto (
        String externalId,
        String name,
        String description,
        BigDecimal price,
        Integer quantity,
        String categoryLabel
){}

