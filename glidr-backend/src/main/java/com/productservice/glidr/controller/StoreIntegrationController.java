package com.productservice.glidr.controller;

import com.productservice.glidr.dtos.*;
import com.productservice.glidr.model.Store;
import com.productservice.glidr.repository.StoreRepository;
import com.productservice.glidr.service.StoreIntegrationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/store/integration")
@RequiredArgsConstructor
public class StoreIntegrationController {
    private final StoreIntegrationService integrationService;
    private final StoreRepository storeRepository;

    private String getAuthenticatedStoreId(Authentication authentication) {
        String email = authentication.getName();
        Store store = storeRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Store not found."));
        return store.getId();
    }

    @PostMapping("/connect")
    public ResponseEntity<StoreIntegrationResponse> connect(

            Authentication authentication,

            @RequestBody CreateStoreIntegrationRequest request
    ) {

        String storeId = getAuthenticatedStoreId(authentication);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(
                        integrationService.connect(
                                storeId,
                                request
                        )
                );
    }

    @PutMapping
    public ResponseEntity<StoreIntegrationResponse> update(

            Authentication authentication,

            @RequestBody UpdateStoreIntegrationRequest request
    ) {

        String storeId = getAuthenticatedStoreId(authentication);

        return ResponseEntity.ok(
                integrationService.update(
                        storeId,
                        request
                )
        );
    }

    @GetMapping
    public ResponseEntity<StoreIntegrationResponse> getIntegration(

            Authentication authentication
    ) {

        String storeId = getAuthenticatedStoreId(authentication);

        return ResponseEntity.ok(
                integrationService.getIntegration(storeId)
        );
    }

    @DeleteMapping
    public ResponseEntity<Void> disconnect(

            Authentication authentication
    ) {

        String storeId = getAuthenticatedStoreId(authentication);

        integrationService.disconnect(storeId);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/test")
    public ResponseEntity<TestConnectionResponse> testConnection(

            Authentication authentication
    ) {

        String storeId = getAuthenticatedStoreId(authentication);

        return ResponseEntity.ok(
                integrationService.testConnection(storeId)
        );
    }

    @PostMapping("/sync")
    public ResponseEntity<SyncInventoryResponse> syncInventory(

            Authentication authentication
    ) {

        String storeId = getAuthenticatedStoreId(authentication);

        return ResponseEntity.ok(
                integrationService.synchronizeInventory(storeId)
        );
    }



    @GetMapping("/debug/warehouses")
    public ResponseEntity<String> debugWarehouses(
            Authentication authentication
    ) {

        String storeId = getAuthenticatedStoreId(authentication);

        return ResponseEntity.ok(
                integrationService.debugWarehouses(storeId)
        );
    }

    @GetMapping("/debug/products")
    public ResponseEntity<String> debugProducts(
            Authentication authentication
    ) {

        String storeId = getAuthenticatedStoreId(authentication);

        return ResponseEntity.ok(
                integrationService.debugProducts(storeId)
        );
    }
}
