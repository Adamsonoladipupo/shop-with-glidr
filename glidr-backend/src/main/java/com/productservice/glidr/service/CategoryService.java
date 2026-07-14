package com.productservice.glidr.service;


import com.productservice.glidr.dtos.CategoryDtos.*;
import com.productservice.glidr.model.Category ;
import com.productservice.glidr.model.CategoryLocation;
import com.productservice.glidr.exception.NotFoundException;
import com.productservice.glidr.repository.CategoryLocationRepository;
import com.productservice.glidr.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryLocationRepository categoryLocationRepository;

    public CategoryResponse createCategory(CreateCategoryRequest request) {
        Category category = new Category();
        category.setName(request.name());
        category.setCode(request.code());
        return toResponse(categoryRepository.save(category));
    }

    public CategoryResponse updateCategory(String categoryId, CreateCategoryRequest request) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new NotFoundException("Category not found: " + categoryId));
        category.setName(request.name());
        category.setCode(request.code());
        return toResponse(categoryRepository.save(category));
    }

    public void upsertCategoryLocation(UpdateCategoryLocationRequest request) {
        CategoryLocation location = categoryLocationRepository
                .findByStoreIdAndCategoryId(request.storeId(), request.categoryId())
                .orElseGet(CategoryLocation::new);
        location.setStoreId(request.storeId());
        location.setCategoryId(request.categoryId());
        location.setAisleNumber(request.aisleNumber());
        location.setShelfNumber(request.shelfNumber());
        categoryLocationRepository.save(location);
    }

    public Category mapExternalCategory(String externalCategoryLabel) {
        if (externalCategoryLabel == null || externalCategoryLabel.isBlank()) return null;
        return categoryRepository.findByCode(externalCategoryLabel).orElseGet(() -> {
            Category category = new Category();
            category.setName(externalCategoryLabel);
            category.setCode(externalCategoryLabel);
            return categoryRepository.save(category);
        });
    }

    public Optional<CategoryLocation> getCategoryLocation(String storeId, String categoryId) {
        return categoryLocationRepository.findByStoreIdAndCategoryId(storeId, categoryId);
    }

    private CategoryResponse toResponse(Category c) {
        return new CategoryResponse(c.getId(), c.getName(), c.getCode());
    }
}
