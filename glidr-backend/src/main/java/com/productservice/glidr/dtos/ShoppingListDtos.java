package com.productservice.glidr.dtos;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.List;
public class ShoppingListDtos {

    public record CreateShoppingListRequest(
            @NotNull String userId,
            String name,
            @NotEmpty List<ItemRequest> items
    ) {}

    public record ItemRequest(
            @NotNull String productId,
            @NotNull Integer quantity
    ) {}

    public record ShoppingListResponse(
            String id,
            String userId,
            String name,
            LocalDateTime createdAt,
            List<OptimizedItem> items
    ) {}

    public record OptimizedItem(
            String productId,
            String productName,
            Integer quantity,
            Integer aisleNumber,
            Integer shelfNumber
    ) {}

    private ShoppingListDtos() {}
}
