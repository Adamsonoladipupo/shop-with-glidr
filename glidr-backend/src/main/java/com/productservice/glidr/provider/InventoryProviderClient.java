package com.productservice.glidr.provider;

import com.productservice.glidr.model.Product;
import com.productservice.glidr.model.StoreIntegration;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface InventoryProviderClient {
    boolean testConnection(StoreIntegration integration);
    ResponseEntity<String> getWarehouses(StoreIntegration integration);
    ResponseEntity<String> getProducts(StoreIntegration integration);
}
