package com.productservice.glidr.event;

import java.math.BigDecimal;
import java.time.Instant;

public record ProductSyncedEvent (
    String storeId,
    String externalId,
    String name,
    String description,
    BigDecimal price,
    Integer quantity,
    String externalCategoryLabel,
    Instant syncedAt
) {}

