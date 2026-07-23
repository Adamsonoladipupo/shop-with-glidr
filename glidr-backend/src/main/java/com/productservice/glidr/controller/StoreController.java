package com.productservice.glidr.controller;
import com.productservice.glidr.dtos.*;
import com.productservice.glidr.service.StoreService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stores")
@RequiredArgsConstructor
public class StoreController {
    private final StoreService storeService;

    @PostMapping("/register")
    public ResponseEntity<StoreResponse> register(
            @Valid @RequestBody StoreRegistrationRequest request
    ) {
        StoreResponse response = storeService.register(request);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<StoreLoginResponse> login(
            @Valid @RequestBody StoreLoginRequest request
    ) {
        System.out.println("===== LOGIN ENDPOINT HIT =====");

        StoreLoginResponse response =
                storeService.login(request);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{storeId}")
    public ResponseEntity<StoreProfileResponse> getProfile(
            @PathVariable String storeId
    ) {
        return ResponseEntity.ok(
                storeService.getProfile(storeId)
        );
    }

    @PutMapping("/{storeId}")
    public ResponseEntity<StoreResponse> updateProfile(
            @PathVariable String storeId,
            @Valid @RequestBody UpdateStoreRequest request
    ) {
        return ResponseEntity.ok(
                storeService.updateProfile(
                        storeId,
                        request
                )
        );
    }



}
