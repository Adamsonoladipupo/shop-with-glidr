package com.productservice.glidr.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "receipts")
@Getter
@Setter
@NoArgsConstructor
public class Receipt {

    @Id
    private String id = UUID.randomUUID().toString();
    private String userId;
    private String receiptNumber;
    private LocalDateTime purchasedDate;
    private BigDecimal totalPrice;
    private String status;
}
