package com.productservice.glidr;

import com.productservice.glidr.dtos.ProductDtos.ProductLocationResponse;
import com.productservice.glidr.dtos.ProductDtos.ProductResponse;
import com.productservice.glidr.model.Category;
import com.productservice.glidr.model.CategoryLocation;
import com.productservice.glidr.model.Product;
import com.productservice.glidr.event.InventoryUpdateEvent;
import com.productservice.glidr.event.ProductSyncedEvent;
import com.productservice.glidr.exception.NotFoundException;
import com.productservice.glidr.repository.ProductRepository;
import com.productservice.glidr.service.CategoryService;
import com.productservice.glidr.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @Mock
    private CategoryService categoryService;

    @InjectMocks
    private ProductService productService;

    private Product milkProduct;

    @BeforeEach
    void setup() {
        milkProduct = new Product();
        milkProduct.setExternalId("ext-001");
        milkProduct.setStoreId("store-abc");
        milkProduct.setName("Whole Milk 1L");
        milkProduct.setPrice(new BigDecimal("1.20"));
        milkProduct.setQuantity(80);
        milkProduct.setAisleNumber(2);
        milkProduct.setShelfNumber(3);
    }

    @Test
    void searchProducts_noQuery_returnsAll() {
        when(productRepository.findByStoreId("store-abc")).thenReturn(List.of(milkProduct));

        List<ProductResponse> results = productService.searchProducts("store-abc", null);

        assertThat(results).hasSize(1);
        assertThat(results.get(0).name()).isEqualTo("Whole Milk 1L");
    }

    @Test
    void searchProducts_withQuery_filtersResults() {
        when(productRepository.findByStoreIdAndNameContainingIgnoreCase("store-abc", "milk"))
                .thenReturn(List.of(milkProduct));

        List<ProductResponse> results = productService.searchProducts("store-abc", "milk");

        assertThat(results).hasSize(1);
    }

    @Test
    void getProductDetails_found() {
        when(productRepository.findById("prod-1")).thenReturn(Optional.of(milkProduct));

        ProductResponse response = productService.getProductDetails("prod-1");

        assertThat(response.name()).isEqualTo("Whole Milk 1L");
        assertThat(response.price()).isEqualByComparingTo("1.20");
    }

    @Test
    void getProductDetails_notFound_throws() {
        when(productRepository.findById(anyString())).thenReturn(Optional.empty());

        assertThatThrownBy(() -> productService.getProductDetails("bad-id"))
                .isInstanceOf(NotFoundException.class);
    }

    @Test
    void getProductLocation_returnsAisleAndShelf() {
        when(productRepository.findById("prod-1")).thenReturn(Optional.of(milkProduct));

        ProductLocationResponse loc = productService.getProductLocation("prod-1");

        assertThat(loc.aisleNumber()).isEqualTo(2);
        assertThat(loc.shelfNumber()).isEqualTo(3);
    }

    @Test
    void onProductSynced_createsNewProduct() {
        Category dairy = new Category();
        dairy.setCode("Dairy");

        CategoryLocation loc = new CategoryLocation();
        loc.setAisleNumber(2);
        loc.setShelfNumber(3);

        when(productRepository.findByStoreIdAndExternalId("store-abc", "ext-001"))
                .thenReturn(Optional.empty());
        when(categoryService.mapExternalCategory("Dairy")).thenReturn(dairy);
        when(categoryService.getCategoryLocation("store-abc", dairy.getId()))
                .thenReturn(Optional.of(loc));
        when(productRepository.save(any())).thenReturn(milkProduct);

        ProductSyncedEvent event = new ProductSyncedEvent(
                "store-abc", "ext-001", "Whole Milk 1L", "Fresh dairy",
                new BigDecimal("1.20"), 80, "Dairy", Instant.now()
        );

        productService.onProductSynced(event);

        verify(productRepository).save(any(Product.class));
    }

    @Test
    void onInventoryUpdated_updatesExistingProduct() {
        when(productRepository.findByStoreIdAndExternalId("store-abc", "ext-001"))
                .thenReturn(Optional.of(milkProduct));
        when(productRepository.save(any())).thenReturn(milkProduct);

        InventoryUpdateEvent event = new InventoryUpdateEvent("store-abc", "ext-001", 55, Instant.now());

        productService.onInventoryUpdated(event);

        verify(productRepository).save(argThat(p -> p.getQuantity() == 55));
    }

    @Test
    void onInventoryUpdated_unknownProduct_logsWarningOnly() {
        when(productRepository.findByStoreIdAndExternalId(anyString(), anyString()))
                .thenReturn(Optional.empty());

        productService.onInventoryUpdated(new InventoryUpdateEvent("store-abc", "unknown", 10, Instant.now()));

        verify(productRepository, never()).save(any());
    }
}
