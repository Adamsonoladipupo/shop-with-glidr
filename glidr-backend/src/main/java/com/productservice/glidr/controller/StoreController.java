package com.productservice.glidr.controller;
import com.productservice.glidr.dtos.StoreDtos;
import com.productservice.glidr.service.StoreService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/store")
@RequiredArgsConstructor
public class StoreController {
    private final StoreService storeService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StoreDtos.StoreResponse registerStore(@Valid @RequestBody StoreDtos.RegisterStoreRequest request) {
        return storeService.registerStore(request);
    }

    @GetMapping("/{storeId}")
    public StoreDtos.StoreResponse getStoreDetails(@PathVariable String storeId) {
        return storeService.getStoreDetails(storeId);
    }
}
