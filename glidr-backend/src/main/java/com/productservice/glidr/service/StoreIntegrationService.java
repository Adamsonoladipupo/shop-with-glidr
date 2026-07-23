package com.productservice.glidr.service;

import com.productservice.glidr.dtos.*;

public interface StoreIntegrationService {
    StoreIntegrationResponse connect(String storeId, CreateStoreIntegrationRequest request);
    StoreIntegrationResponse update(String storeId, UpdateStoreIntegrationRequest request);
    StoreIntegrationResponse getIntegration(String storeId);
    void disconnect(String storeId);
    TestConnectionResponse testConnection(String storeId);
    SyncInventoryResponse synchronizeInventory(String storeId);

    String debugWarehouses(String storeId);
    String debugProducts(String storeId);
}
