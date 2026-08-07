package com.productservice.glidr.controller;

import com.productservice.glidr.dtos.*;
import com.productservice.glidr.exception.StoreNotFoundException;
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

    private Store getAuthenticatedStore(Authentication authentication) {

        String email = authentication.getName();

        return storeRepository.findByEmail(email)
                .orElseThrow(() ->
                        new StoreNotFoundException(
                                "Store not found."
                        ));
    }

    @PostMapping("/connect")
    public ResponseEntity<StoreIntegrationResponse> connect(
            Authentication authentication,
            @RequestBody CreateStoreIntegrationRequest request
    ) {

        Store store = getAuthenticatedStore(authentication);

        StoreIntegrationResponse response =
                integrationService.connect(
                        store.getId(),
                        request
                );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @PutMapping
    public ResponseEntity<StoreIntegrationResponse> update(
            Authentication authentication,
            @RequestBody UpdateStoreIntegrationRequest request
    ) {

        Store store = getAuthenticatedStore(authentication);

        return ResponseEntity.ok(
                integrationService.update(
                        store.getId(),
                        request
                )
        );
    }

    @GetMapping
    public ResponseEntity<StoreIntegrationResponse> getIntegration(
            Authentication authentication
    ) {
        Store store = getAuthenticatedStore(authentication);

        return ResponseEntity.ok(
                integrationService.getIntegration(
                        store.getId()
                )
        );
    }

    @DeleteMapping
    public ResponseEntity<Void> disconnect(
            Authentication authentication
    ) {

        Store store = getAuthenticatedStore(authentication);

        integrationService.disconnect(
                store.getId()
        );

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/test")
    public ResponseEntity<TestConnectionResponse> testConnection(
            Authentication authentication
    ) {

        Store store = getAuthenticatedStore(authentication);

        return ResponseEntity.ok(
                integrationService.testConnection(
                        store.getId()
                )
        );
    }

    @PostMapping("/sync")
    public ResponseEntity<SyncInventoryResponse> synchronizeInventory(
            Authentication authentication
    ) {

        Store store = getAuthenticatedStore(authentication);

        return ResponseEntity.ok(
                integrationService.synchronizeInventory(
                        store.getId()
                )
        );
    }

    @GetMapping("/debug/warehouses")
    public ResponseEntity<String> debugWarehouses(
            Authentication authentication
    ) {

        Store store = getAuthenticatedStore(authentication);

        return ResponseEntity.ok(
                integrationService.debugWarehouses(
                        store.getId()
                )
        );
    }

    @GetMapping("/debug/products")
    public ResponseEntity<String> debugProducts(
            Authentication authentication
    ) {

        Store store = getAuthenticatedStore(authentication);

        return ResponseEntity.ok(
                integrationService.debugProducts(
                        store.getId()
                )
        );
    }
}
