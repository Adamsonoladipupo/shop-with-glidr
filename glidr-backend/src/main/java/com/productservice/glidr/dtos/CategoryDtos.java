package com.productservice.glidr.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CategoryDtos {
    public record CreateCategoryRequest(
            @NotBlank String name,
            String code
    ) {}

    public record UpdateCategoryLocationRequest(
            @NotNull String storeId,
            @NotNull String categoryId,
            @NotNull Integer aisleNumber,
            @NotNull Integer shelfNumber
    ) {}

    public record CategoryResponse(
            String id,
            String name,
            String code
    ) {}

    private CategoryDtos() {}
}

