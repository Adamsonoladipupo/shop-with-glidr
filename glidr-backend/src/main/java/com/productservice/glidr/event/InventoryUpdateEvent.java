package com.productservice.glidr.event;

import java.time.Instant;
public record InventoryUpdateEvent(
        String storeId,
        String externalId,
        Integer newQuantity,
        Instant updatedAt
) {
}
