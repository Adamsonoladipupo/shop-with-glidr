package com.productservice.glidr.event;


import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

public record ReceiptCreatedEvent(
    String storeId,
    String userId,
    String receiptNumber,
    Instant purchasedDate,
    BigDecimal totalPrice,
    List<LineItem> items
) {
        public record LineItem(
                String externalProductId,
                Integer quantity,
                BigDecimal unitPrice,
                BigDecimal subTotal
        ) {}
    }

