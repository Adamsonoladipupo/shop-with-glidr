package com.productservice.glidr.service;

import com.productservice.glidr.dtos.*;

public interface StoreService {
    StoreResponse register(StoreRegistrationRequest request);
    StoreLoginResponse login(StoreLoginRequest request);
    StoreProfileResponse getProfile(String storeId);
    StoreResponse updateProfile(String storeId, UpdateStoreRequest request);
}
