//package com.productservice.glidr.service;
//
//import com.productservice.glidr.dtos.ProductDtos.*;
//import com.productservice.glidr.model.Category;
//import com.productservice.glidr.model.CategoryLocation;
//import com.productservice.glidr.model.Product;
//import com.productservice.glidr.event.InventoryUpdateEvent;
//import com.productservice.glidr.event.ProductSyncedEvent;
//import com.productservice.glidr.exception.NotFoundException;
//import com.productservice.glidr.repository.ProductRepository;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//@Slf4j
//public class ProductService {
//    private final ProductRepository productRepository;
//    private final CategoryService categoryService;
//
//    public List<ProductResponse> searchProducts(String storeId, String query) {
//        List<Product> products = (query == null || query.isBlank())
//                ? productRepository.findByStoreId(storeId)
//                : productRepository.findByStoreIdAndNameContainingIgnoreCase(storeId, query);
//        return products.stream().map(this::toResponse).toList();
//    }
//
//    public ProductResponse getProductDetails(String productId) {
//        return toResponse(productRepository.findById(productId)
//                .orElseThrow(() -> new NotFoundException("Product not found: " + productId)));
//    }
//
//    public ProductLocationResponse getProductLocation(String productId) {
//        Product p = productRepository.findById(productId)
//                .orElseThrow(() -> new NotFoundException("Product not found: " + productId));
//        return new ProductLocationResponse(p.getId(), p.getName(), p.getAisleNumber(), p.getShelfNumber());
//    }
//
//
//    public void onProductSynced(ProductSyncedEvent event) {
//        Product product = productRepository
//                .findByStoreIdAndExternalId(event.storeId(), event.externalId())
//                .orElseGet(Product::new);
//
//        product.setExternalId(event.externalId());
//        product.setStoreId(event.storeId());
//        product.setName(event.name());
//        product.setDescription(event.description());
//        product.setPrice(event.price());
//        product.setQuantity(event.quantity());
//
//        Category category = categoryService.mapExternalCategory(event.externalCategoryLabel());
//        if (category != null) {
//            product.setCategoryId(category.getId());
//            categoryService.getCategoryLocation(event.storeId(), category.getId())
//                    .ifPresent(loc -> applyLocation(product, loc));
//        }
//
//        productRepository.save(product);
//        log.info("Upserted product {} for store {}", product.getName(), event.storeId());
//    }
//
//    public void onInventoryUpdated(InventoryUpdateEvent event) {
//        productRepository.findByStoreIdAndExternalId(event.storeId(), event.externalId())
//                .ifPresentOrElse(p -> {
//                    p.setQuantity(event.newQuantity());
//                    productRepository.save(p);
//                    log.info("Updated stock for product {} -> {}", p.getId(), event.newQuantity());
//                }, () -> log.warn("Inventory update for unknown product externalId={} store={}",
//                        event.externalId(), event.storeId()));
//    }
//
//    private void applyLocation(Product product, CategoryLocation loc) {
//        product.setAisleNumber(loc.getAisleNumber());
//        product.setShelfNumber(loc.getShelfNumber());
//    }
//
//    private ProductResponse toResponse(Product p) {
//        return new ProductResponse(p.getId(), p.getStoreId(), p.getCategoryId(),
//                p.getName(), p.getDescription(), p.getPrice(),
//                p.getQuantity(), p.getShelfNumber(), p.getAisleNumber());
//    }
//}
