package com.productservice.glidr.pos;

public record PosInventoryDto(
    String externalId,
    Integer quantity
) {}
