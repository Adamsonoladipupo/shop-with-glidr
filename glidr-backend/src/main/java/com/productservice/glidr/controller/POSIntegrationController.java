package com.productservice.glidr.controller;

import com.productservice.glidr.dtos.POSIntegrationDtos;
import com.productservice.glidr.service.POSIntegrationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/pos-integrations")
@RequiredArgsConstructor
public class POSIntegrationController {
    private final POSIntegrationService posIntegrationService;

    @PostMapping("/connect")
    @ResponseStatus(HttpStatus.CREATED)
    public POSIntegrationDtos.PosIntegrationResponse connectPOS(@Valid @RequestBody POSIntegrationDtos.ConnectPosRequest request) {
        return posIntegrationService.connectPOS(request);
    }

    @PostMapping("/{storeId}/sync")
    public POSIntegrationDtos.SyncResultResponse triggerSync(@PathVariable String storeId) {
        return posIntegrationService.syncAll(storeId);
    }
}
