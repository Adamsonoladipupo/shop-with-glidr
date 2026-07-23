package com.productservice.glidr.repository;

import com.productservice.glidr.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    List<Product> findByStoreId(String storeId);
    Optional<Product> findByStoreIdAndProviderProductId(String storeId, String providerProductId);
    boolean existsByStoreIdAndProviderProductId(String storeId, String providerProductId);
    void deleteByStoreId(String storeId);
}
