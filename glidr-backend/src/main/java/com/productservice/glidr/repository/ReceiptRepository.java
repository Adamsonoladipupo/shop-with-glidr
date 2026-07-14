package com.productservice.glidr.repository;

import com.productservice.glidr.model.Receipt;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReceiptRepository extends MongoRepository<Receipt, String> {
    List<Receipt> findByUserId(String userId);
    Optional<Receipt> findByReceiptNumber(String receiptNumber);
}
