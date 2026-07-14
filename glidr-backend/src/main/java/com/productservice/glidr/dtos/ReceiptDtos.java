package com.productservice.glidr.dtos;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class ReceiptDtos {

    public record ReceiptResponse(
            String id,
            String userId,
            String receiptNumber,
            LocalDateTime purchasedDate,
            BigDecimal totalPrice,
            String status
    ) {}

    public record ReceiptDetailResponse(
            String id,
            String userId,
            String receiptNumber,
            LocalDateTime purchasedDate,
            BigDecimal totalPrice,
            String status,
            List<ReceiptItemResponse> items
    ) {}

    public record ReceiptItemResponse(
            String productId,
            Integer quantity,
            BigDecimal unitPrice,
            BigDecimal subTotal
    ) {}

    private ReceiptDtos() {}
}
