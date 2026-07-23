//package com.productservice.glidr.controller;
//
//import com.productservice.glidr.dtos.ProductDtos;
//import com.productservice.glidr.service.ProductService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/products")
//@RequiredArgsConstructor
//public class ProductController {
//    private final ProductService productService;
//
//    @GetMapping
//    public List<ProductDtos.ProductResponse> searchProducts(@RequestParam String storeId,
//                                                            @RequestParam(required = false) String q) {
//        return productService.searchProducts(storeId, q);
//    }
//
//    @GetMapping("/{productId}")
//    public ProductDtos.ProductResponse getProductDetails(@PathVariable String productId) {
//        return productService.getProductDetails(productId);
//    }
//
//    @GetMapping("/{productId}/location")
//    public ProductDtos.ProductLocationResponse getProductLocation(@PathVariable String productId) {
//        return productService.getProductLocation(productId);
//    }
//}
