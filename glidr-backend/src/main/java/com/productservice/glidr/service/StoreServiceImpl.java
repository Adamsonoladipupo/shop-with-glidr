package com.productservice.glidr.service;

import com.productservice.glidr.dtos.*;
import com.productservice.glidr.enums.StoreStatus;
import com.productservice.glidr.enums.VerificationStatus;
import com.productservice.glidr.exception.InvalidStoreCredentialsException;
import com.productservice.glidr.exception.StoreAlreadyExistsException;
import com.productservice.glidr.exception.StoreNotFoundException;
import com.productservice.glidr.model.Store;
import com.productservice.glidr.repository.StoreRepository;
import com.productservice.glidr.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class StoreServiceImpl implements StoreService{

    private final StoreRepository storeRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public StoreResponse register(StoreRegistrationRequest request) {
        if (storeRepository.existsByEmail(request.getEmail())) {
            throw new StoreAlreadyExistsException(
                    "A store with this email already exists."
            );
        }

        Store store = new Store();

        store.setBusinessName(request.getBusinessName());
        store.setOwnerName(request.getOwnerName());
        store.setEmail(request.getEmail());
        store.setPhoneNumber(request.getPhoneNumber());
        store.setPassword(passwordEncoder.encode(request.getPassword()));
        store.setAddress(request.getAddress());

        store.setStatus(StoreStatus.ACTIVE);
        store.setVerificationStatus(VerificationStatus.UNVERIFIED);

        store.setCreatedAt(LocalDateTime.now());
        store.setUpdatedAt(LocalDateTime.now());

        Store savedStore = storeRepository.save(store);

        return mapToStoreResponse(savedStore);
    }

    @Override
    public StoreLoginResponse login(StoreLoginRequest request) {
        Store store = storeRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new InvalidStoreCredentialsException("Invalid email or password."));

        if (!passwordEncoder.matches(
                request.getPassword(),
                store.getPassword())) {

            throw new InvalidStoreCredentialsException(
                    "Invalid email or password.");
        }

        store.setLastLoginAt(LocalDateTime.now());

        storeRepository.save(store);

//        String token = jwtService.generateToken(store);
        String token = jwtService.generateToken(store.getEmail(), Map.of("storeId", store.getId(), "role", "STORE"));

        StoreLoginResponse response = new StoreLoginResponse();
        response.setToken(token);
        response.setStore(mapToStoreResponse(store));

        return response;
    }

    @Override
    public StoreProfileResponse getProfile(String storeId) {
        Store store = getStore(storeId);
        return mapToProfileResponse(store);
    }

    @Override
    public StoreResponse updateProfile(String storeId, UpdateStoreRequest request) {
        Store store = getStore(storeId);

        store.setBusinessName(request.getBusinessName());
        store.setOwnerName(request.getOwnerName());
        store.setPhoneNumber(request.getPhoneNumber());
        store.setLogo(request.getLogo());
        store.setAddress(request.getAddress());

        store.setUpdatedAt(LocalDateTime.now());

        Store updatedStore = storeRepository.save(store);

        return mapToStoreResponse(updatedStore);
    }


    private Store getStore(String id) {

        return storeRepository.findById(id)
                .orElseThrow(() ->
                        new StoreNotFoundException("Store not found."));
    }


    private StoreResponse mapToStoreResponse(Store store) {

        StoreResponse response = new StoreResponse();

        response.setId(store.getId());
        response.setBusinessName(store.getBusinessName());
        response.setOwnerName(store.getOwnerName());
        response.setEmail(store.getEmail());
        response.setPhoneNumber(store.getPhoneNumber());
        response.setLogo(store.getLogo());
        response.setStatus(store.getStatus());
        response.setVerificationStatus(store.getVerificationStatus());

        return response;
    }


    private StoreProfileResponse mapToProfileResponse(Store store) {

        StoreProfileResponse response = new StoreProfileResponse();

        response.setId(store.getId());
        response.setBusinessName(store.getBusinessName());
        response.setOwnerName(store.getOwnerName());
        response.setEmail(store.getEmail());
        response.setPhoneNumber(store.getPhoneNumber());
        response.setLogo(store.getLogo());
        response.setStatus(store.getStatus());
        response.setVerificationStatus(store.getVerificationStatus());
        response.setAddress(store.getAddress());

        return response;
    }


}
