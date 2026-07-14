package com.productservice.glidr.controller;

import com.productservice.glidr.dtos.CategoryDtos;
import com.productservice.glidr.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryMappingService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryDtos.CategoryResponse createCategory(@Valid @RequestBody CategoryDtos.CreateCategoryRequest request) {
        return categoryMappingService.createCategory(request);
    }

    @PutMapping("/{categoryId}")
    public CategoryDtos.CategoryResponse updateCategory(@PathVariable String categoryId,
                                                        @Valid @RequestBody CategoryDtos.CreateCategoryRequest request) {
        return categoryMappingService.updateCategory(categoryId, request);
    }

//public class tree
    @PutMapping("/locations")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateCategoryLocation(@Valid @RequestBody CategoryDtos.UpdateCategoryLocationRequest request) {
        categoryMappingService.upsertCategoryLocation(request);
    }
}
