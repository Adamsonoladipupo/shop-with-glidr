package com.productservice.glidr.repository;

import com.productservice.glidr.enums.IntegrationStatus;
import com.productservice.glidr.model.StoreIntegration;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface StoreIntegrationRepository extends MongoRepository<StoreIntegration, String> {

    boolean existsByStoreId(String storeId);
    List<StoreIntegration> findByStatus(IntegrationStatus status);
    Optional<StoreIntegration> findByStoreId(String storeId);
}
