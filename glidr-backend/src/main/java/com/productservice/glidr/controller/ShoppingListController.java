//package com.productservice.glidr.controller;
//
//import com.productservice.glidr.dtos.ShoppingListDtos;
//import com.productservice.glidr.service.ShoppingListService;
//import jakarta.validation.Valid;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("api/shoppingList")
//@RequiredArgsConstructor
//public class ShoppingListController {
//    private final ShoppingListService shoppingListService;
//
//    @PostMapping
//    @ResponseStatus(HttpStatus.CREATED)
//    public ShoppingListDtos.ShoppingListResponse createShoppingList(@Valid @RequestBody ShoppingListDtos.CreateShoppingListRequest request) {
//        return shoppingListService.createShoppingList(request);
//    }
//
//    @GetMapping("/{shoppingListId}/optimize")
//    public ShoppingListDtos.ShoppingListResponse optimizeShoppingList(@PathVariable String shoppingListId) {
//        return shoppingListService.optimizeShoppingList(shoppingListId);
//    }
//}
