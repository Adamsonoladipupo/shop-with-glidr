package com.productservice.glidr.service;

import com.productservice.glidr.dtos.*;
import com.productservice.glidr.enums.IntegrationStatus;
import com.productservice.glidr.model.StoreIntegration;
import com.productservice.glidr.provider.InventoryProviderClient;
import com.productservice.glidr.provider.TracePosClient;
import com.productservice.glidr.repository.ProductRepository;
import com.productservice.glidr.repository.StoreIntegrationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class StoreIntegrationServiceImpl implements StoreIntegrationService{
    private final StoreIntegrationRepository integrationRepository;
    private final ProductRepository productRepository;
    private final TracePosClient tracePosClient;

    @Override
    public StoreIntegrationResponse connect(
            String storeId,
            CreateStoreIntegrationRequest request
    ) {

        if (integrationRepository.existsByStoreId(storeId)) {
            throw new RuntimeException("Store already connected.");
        }

        StoreIntegration integration = StoreIntegration.builder()
                .storeId(storeId)
                .provider(request.getProvider())
                .baseUrl(request.getBaseUrl())
                .apiKey(request.getApiKey())
                .apiSecret(request.getApiSecret())
                .webhookSecret(request.getWebhookSecret())
                .connectedAt(LocalDateTime.now())
                .status(IntegrationStatus.CONNECTED)
                .enabled(true)
                .build();

        integrationRepository.save(integration);

        return mapToResponse(integration);
    }

    @Override
    public StoreIntegrationResponse update(
            String storeId,
            UpdateStoreIntegrationRequest request
    ) {

        StoreIntegration integration = integrationRepository
                .findByStoreId(storeId)
                .orElseThrow(() ->
                        new RuntimeException("Integration not found."));

        if (request.getBaseUrl() != null)
            integration.setBaseUrl(request.getBaseUrl());

        if (request.getApiKey() != null)
            integration.setApiKey(request.getApiKey());

        if (request.getApiSecret() != null)
            integration.setApiSecret(request.getApiSecret());

        if (request.getWebhookSecret() != null)
            integration.setWebhookSecret(request.getWebhookSecret());

        if (request.getEnabled() != null)
            integration.setEnabled(request.getEnabled());

        integrationRepository.save(integration);

        return mapToResponse(integration);
    }

    @Override
    public StoreIntegrationResponse getIntegration(String storeId) {

        StoreIntegration integration = integrationRepository
                .findByStoreId(storeId)
                .orElseThrow(() ->
                        new RuntimeException("Integration not found."));

        return mapToResponse(integration);
    }

    @Override
    public void disconnect(String storeId) {

        StoreIntegration integration = integrationRepository
                .findByStoreId(storeId)
                .orElseThrow(() ->
                        new RuntimeException("Integration not found."));

        integration.setStatus(IntegrationStatus.DISCONNECTED);

        integration.setEnabled(false);

        integrationRepository.save(integration);
    }

    @Override
    public TestConnectionResponse testConnection(String storeId) {

        StoreIntegration integration = integrationRepository
                .findByStoreId(storeId)
                .orElseThrow(() ->
                        new RuntimeException("Integration not found."));

        boolean connected = tracePosClient.testConnection(integration);

        return TestConnectionResponse.builder()
                .connected(connected)
                .provider(integration.getProvider().name())
                .message(
                        connected
                                ? "Connection successful."
                                : "Unable to connect to TracePOS."
                )
                .responseTime(0)
                .build();
    }

    @Override
    public SyncInventoryResponse synchronizeInventory(
            String storeId
    ) {

        /*
         * Product synchronization
         * will be implemented after
         * TracePOS API integration.
         */

        return SyncInventoryResponse.builder()
                .message("Inventory synchronization completed.")
                .newProducts(0)
                .updatedProducts(0)
                .deletedProducts(0)
                .totalProductsFetched(0)
                .syncedAt(LocalDateTime.now())
                .build();
    }

    private StoreIntegrationResponse mapToResponse(
            StoreIntegration integration
    ) {

        long totalProducts = productRepository
                .findByStoreId(integration.getStoreId())
                .size();

        return StoreIntegrationResponse.builder()
                .id(integration.getId())
                .storeId(integration.getStoreId())
                .provider(integration.getProvider())
                .baseUrl(integration.getBaseUrl())
                .status(integration.getStatus())
                .enabled(integration.getEnabled())
                .connectedAt(integration.getConnectedAt())
                .lastSuccessfulSync(integration.getLastSuccessfulSync())
                .lastWebhookReceived(integration.getLastWebhookReceived())
                .lastSyncError(integration.getLastSyncError())
                .productSummary(
                        ProductSummaryResponse.builder()
                                .totalProducts(totalProducts)
                                .activeProducts(totalProducts)
                                .outOfStockProducts(0)
                                .build()
                )
                .build();
    }

    @Override
    public String debugWarehouses(String storeId) {

        StoreIntegration integration =
                integrationRepository
                        .findByStoreId(storeId)
                        .orElseThrow(() ->
                                new RuntimeException("Integration not found."));

        return tracePosClient
                .getWarehouses(integration)
                .getBody();
    }

    @Override
    public String debugProducts(String storeId) {

        StoreIntegration integration =
                integrationRepository
                        .findByStoreId(storeId)
                        .orElseThrow(() ->
                                new RuntimeException("Integration not found."));

        return tracePosClient
                .getProducts(integration)
                .getBody();
    }

}
