package com.productservice.glidr.repository;

import com.productservice.glidr.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
public interface CategoryRepository extends MongoRepository<Category, String> {
    Optional<Category> findByCode(String code);
}
