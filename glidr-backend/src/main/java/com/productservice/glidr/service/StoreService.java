package com.productservice.glidr.service;

import com.productservice.glidr.dtos.StoreDtos.*;
import com.productservice.glidr.model.Store;
import com.productservice.glidr.model.User;
import com.productservice.glidr.enums.UserRole;
import com.productservice.glidr.exception.BadRequestException;
import com.productservice.glidr.exception.NotFoundException;
import com.productservice.glidr.repository.StoreRepository;
import com.productservice.glidr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StoreService {

    private final StoreRepository storeRepository;
    private final UserRepository userRepository;

    public StoreResponse registerStore(RegisterStoreRequest request) {
        User admin = userRepository.findById(request.adminUserId())
                .orElseThrow(() -> new NotFoundException("User not found: " + request.adminUserId()));
        if (admin.getRole() != UserRole.ADMIN) {
            throw new BadRequestException("Only a STORE_ADMIN user can register a store");
        }
        Store store = new Store();
        store.setName(request.name());
        store.setAddress(request.address());
        store.setContactNumber(request.contactNumber());
        store.setAdminUserId(admin.getId());
        return toResponse(storeRepository.save(store));
    }

    public StoreResponse getStoreDetails(String storeId) {
        Store store = storeRepository.findById(storeId)
                .orElseThrow(() -> new NotFoundException("Store not found: " + storeId));
        return toResponse(store);
    }

    private StoreResponse toResponse(Store store) {
        return new StoreResponse(store.getId(), store.getName(), store.getAddress(),
                store.getContactNumber(), store.getAdminUserId(), store.getCreatedAt());
    }

}
