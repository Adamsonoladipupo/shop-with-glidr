package com.productservice.glidr.repository;

import com.productservice.glidr.model.POSIntegration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface POSIntegrationRepository extends MongoRepository<POSIntegration, String> {
    Optional<POSIntegration> findByStoreId(String storeId);
}
