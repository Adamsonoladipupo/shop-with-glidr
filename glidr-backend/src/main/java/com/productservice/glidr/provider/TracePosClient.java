package com.productservice.glidr.provider;

import com.productservice.glidr.model.Product;
import com.productservice.glidr.model.StoreIntegration;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.util.Collections;
import java.util.List;

@Component
@RequiredArgsConstructor
public class TracePosClient implements InventoryProviderClient{
    private final RestClient restClient;

    @Override
    public boolean testConnection(StoreIntegration integration) {

        try {

            ResponseEntity<String> response =
                    getWarehouses(integration);

            return response.getStatusCode().is2xxSuccessful();

        } catch (Exception e) {

            return false;

        }

    }

    @Override
    public ResponseEntity<String> getWarehouses(
            StoreIntegration integration
    ) {

        return restClient
                .get()
                .uri(integration.getBaseUrl() + "/warehouses")
                .accept(MediaType.APPLICATION_JSON)
                .header(
                        "X-Tracepos-Public-Key",
                        integration.getApiKey()
                )
                .header(
                        "X-Tracepos-Secret-Key",
                        integration.getApiSecret()
                )
                .retrieve()
                .toEntity(String.class);

    }

    @Override
    public ResponseEntity<String> getProducts(
            StoreIntegration integration
    ) {

        return restClient
                .get()
                .uri(integration.getBaseUrl() + "/products")
                .accept(MediaType.APPLICATION_JSON)
                .header(
                        "X-Tracepos-Public-Key",
                        integration.getApiKey()
                )
                .header(
                        "X-Tracepos-Secret-Key",
                        integration.getApiSecret()
                )
                .retrieve()
                .toEntity(String.class);

    }
}
