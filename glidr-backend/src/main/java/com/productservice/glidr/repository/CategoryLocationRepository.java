package com.productservice.glidr.repository;

import com.productservice.glidr.model.CategoryLocation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface CategoryLocationRepository extends MongoRepository<CategoryLocation, String> {
    Optional<CategoryLocation> findByStoreIdAndCategoryId(String storeId, String categoryId);
}
