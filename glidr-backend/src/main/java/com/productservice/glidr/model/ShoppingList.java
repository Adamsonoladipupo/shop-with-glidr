package com.productservice.glidr.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "shopping_lists")
@Getter
@Setter
@NoArgsConstructor
public class ShoppingList {

    @Id
    private String id = UUID.randomUUID().toString();
    private String userId;
    private String name;
    private LocalDateTime createdAt = LocalDateTime.now();
}