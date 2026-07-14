package com.productservice.glidr.repository;

import com.productservice.glidr.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    Optional<Product> findByStoreIdAndExternalId(String storeId, String externalId);
    Optional<Product> findById(String Id);
    List<Product> findByStoreIdAndNameContainingIgnoreCase(String storeId, String name);
    List<Product> findByStoreId(String storeId);
}
