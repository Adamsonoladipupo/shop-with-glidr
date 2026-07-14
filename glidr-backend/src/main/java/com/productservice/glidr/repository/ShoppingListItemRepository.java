package com.productservice.glidr.repository;

import com.productservice.glidr.model.ShoppingList;
import com.productservice.glidr.model.ShoppingListItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingListItemRepository extends MongoRepository<ShoppingListItem, String> {
    List<ShoppingListItem> findByShoppingListId(String shoppingListId);}
