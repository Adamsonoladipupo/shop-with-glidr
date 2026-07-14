package com.productservice.glidr.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.util.UUID;

@Document(collection = "reciept_items")
@Getter
@Setter
@NoArgsConstructor
public class ReceiptItem {
    @Id
    private String id = UUID.randomUUID().toString();
    private String receiptId;
    private String productId;
    private Integer quantity;
    private BigDecimal unitPrice;
    private BigDecimal subTotal;
}
