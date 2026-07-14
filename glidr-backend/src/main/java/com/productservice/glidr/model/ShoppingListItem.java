package com.productservice.glidr.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "shopping_list_item")
@Getter
@Setter
@NoArgsConstructor
public class ShoppingListItem {
    @Id
    private String id = UUID.randomUUID().toString();
    private String shoppingListId;
    private String productId;
    private Integer quantity;
}
