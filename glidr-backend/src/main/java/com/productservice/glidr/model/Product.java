package com.productservice.glidr.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.util.UUID;

@Document(collection = "products")
@Getter
@Setter
@NoArgsConstructor
public class Product {

    @Id
    private String id = UUID.randomUUID().toString();
    private String externalId;
    private String storeId;
    private String categoryId;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer quantity;
    private Integer shelfNumber;
    private Integer aisleNumber;
}