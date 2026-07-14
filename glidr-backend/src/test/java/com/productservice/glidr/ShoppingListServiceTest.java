package com.productservice.glidr;

import com.productservice.glidr.dtos.ShoppingListDtos;
import com.productservice.glidr.exception.NotFoundException;
import com.productservice.glidr.model.Product;
import com.productservice.glidr.model.ShoppingList;
import com.productservice.glidr.model.ShoppingListItem;
import com.productservice.glidr.repository.ProductRepository;
import com.productservice.glidr.repository.ShoppingListItemRepository;
import com.productservice.glidr.repository.ShoppingListRepository;
import com.productservice.glidr.service.ShoppingListService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ShoppingListServiceTest {
    @Mock
    private ShoppingListRepository shoppingListRepository;
    @Mock
    private ShoppingListItemRepository shoppingListItemRepository;
    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ShoppingListService shoppingListService;

    private ShoppingList list;
    private Product milk;
    private Product rice;

    @BeforeEach
    void setup() {
        list = new ShoppingList();
        list.setUserId("user-1");
        list.setName("Weekly shop");

        milk = new Product();
        milk.setName("Whole Milk 1L");
        milk.setPrice(new BigDecimal("1.20"));
        milk.setAisleNumber(2);
        milk.setShelfNumber(3);

        rice = new Product();
        rice.setName("Basmati Rice 2kg");
        rice.setPrice(new BigDecimal("4.50"));
        rice.setAisleNumber(1);
        rice.setShelfNumber(1);
    }

    @Test
    void createShoppingList_savesAndOptimizes() {
        // arrange
        ShoppingListDtos.CreateShoppingListRequest request = new ShoppingListDtos.CreateShoppingListRequest(
                "user123", "My List", List.of()
        );

        ShoppingList savedList = new ShoppingList();
        savedList.setId("list1");
        savedList.setUserId("user123");
        savedList.setName("My List");

        when(shoppingListRepository.save(any(ShoppingList.class))).thenReturn(savedList);
        when(shoppingListRepository.findById("list1")).thenReturn(Optional.of(savedList));
        when(shoppingListItemRepository.findByShoppingListId("list1")).thenReturn(List.of());

        // act
        ShoppingListDtos.ShoppingListResponse response = shoppingListService.createShoppingList(request);

        // assert
        assertThat(response).isNotNull();
        assertThat(response.id()).isEqualTo("list1");
        verify(shoppingListRepository).save(any(ShoppingList.class));
    }

    @Test
    void optimizeShoppingList_sortsByAisleThenShelf() {
        when(shoppingListRepository.findById("list-1")).thenReturn(Optional.of(list));
        when(shoppingListItemRepository.findByShoppingListId("list-1")).thenReturn(
                List.of(itemFor(milk.getId(), 1), itemFor(rice.getId(), 1)));
        when(productRepository.findById(milk.getId())).thenReturn(Optional.of(milk));
        when(productRepository.findById(rice.getId())).thenReturn(Optional.of(rice));

        ShoppingListDtos.ShoppingListResponse response = shoppingListService.optimizeShoppingList("list-1");

        assertThat(response.items().get(0).aisleNumber()).isLessThanOrEqualTo(
                response.items().get(1).aisleNumber());
    }

    @Test
    void optimizeShoppingList_notFound_throws() {
        when(shoppingListRepository.findById(anyString())).thenReturn(Optional.empty());

        assertThatThrownBy(() -> shoppingListService.optimizeShoppingList("bad-id"))
                .isInstanceOf(NotFoundException.class);
    }

    private ShoppingListItem itemFor(String productId, int qty) {
        ShoppingListItem item = new ShoppingListItem();
        item.setProductId(productId);
        item.setQuantity(qty);
        return item;
    }
}
