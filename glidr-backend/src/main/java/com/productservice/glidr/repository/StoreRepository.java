package com.productservice.glidr.repository;

import com.productservice.glidr.model.Store;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StoreRepository extends MongoRepository<Store, String> {
    List<Store> findByAdminUserId(String adminUserId);
    Optional<Store> findByEmail(String email);
    boolean existsByEmail(String email);
}
