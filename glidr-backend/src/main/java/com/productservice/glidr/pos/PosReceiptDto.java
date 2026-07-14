package com.productservice.glidr.pos;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

public record PosReceiptDto(
        String receiptNumber,
        String loyaltyUserId,
        Instant purchasedDate,
        BigDecimal totalPrice,
        List<Line> items
) {
    public record Line(
            String externalProductId,
            Integer quantity,
            BigDecimal unitPrice,
            BigDecimal subTotal
    ) {}
}
