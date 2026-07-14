package com.productservice.glidr.repository;

import com.productservice.glidr.model.ReceiptItem;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ReceiptItemRepository extends MongoRepository<ReceiptItem, String> {
    List<ReceiptItem> findByReceiptId(String receiptId);
}
