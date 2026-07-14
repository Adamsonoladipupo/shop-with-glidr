package com.productservice.glidr.repository;

import com.productservice.glidr.model.ShoppingList;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingListRepository extends MongoRepository<ShoppingList, String> {
    List<ShoppingList> findByUserId(String userId);
}