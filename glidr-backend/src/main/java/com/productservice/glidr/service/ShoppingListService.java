//package com.productservice.glidr.service;
//
//import com.productservice.glidr.dtos.ShoppingListDtos;
//import com.productservice.glidr.exception.NotFoundException;
//import com.productservice.glidr.model.Product;
//import com.productservice.glidr.model.ShoppingList;
//import com.productservice.glidr.model.ShoppingListItem;
//import com.productservice.glidr.repository.ProductRepository;
//import com.productservice.glidr.repository.ShoppingListItemRepository;
//import com.productservice.glidr.repository.ShoppingListRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.Comparator;
//import java.util.List;
//import java.util.Map;
//import java.util.Objects;
//import java.util.stream.Collectors;
//
//@Transactional
//@Service
//@RequiredArgsConstructor
//public class ShoppingListService {
//    private final ShoppingListRepository shoppingListRepository;
//    private final ShoppingListItemRepository shoppingListItemRepository;
//    private final ProductRepository productRepository;
//
//    public ShoppingListDtos.ShoppingListResponse createShoppingList(
//            ShoppingListDtos.CreateShoppingListRequest request) {
//
//        ShoppingList list = new ShoppingList();
//        list.setUserId(request.userId());
//        list.setName(request.name() != null ? request.name() : "My Shopping List");
//        ShoppingList saved = shoppingListRepository.save(list);
//
//        List<ShoppingListDtos.ItemRequest> items = request.items() != null
//                ? request.items()
//                : List.of();
//
//        items.forEach(itemReq -> {
//            ShoppingListItem item = new ShoppingListItem();
//            item.setShoppingListId(saved.getId());
//            item.setProductId(itemReq.productId());
//            item.setQuantity(itemReq.quantity());
//            shoppingListItemRepository.save(item);
//        });
//
//        return optimizeShoppingList(saved.getId());
//    }
//
//    public ShoppingListDtos.ShoppingListResponse optimizeShoppingList(String shoppingListId) {
//        ShoppingList list = shoppingListRepository.findById(shoppingListId)
//                .orElseThrow(() -> new NotFoundException(
//                        "Shopping list not found: " + shoppingListId));
//
//        List<ShoppingListItem> items =
//                shoppingListItemRepository.findByShoppingListId(shoppingListId);
//
//        Map<String, Product> productsById = items.stream()
//                .map(ShoppingListItem::getProductId)
//                .distinct()
//                .map(id -> productRepository.findById(id).orElse(null))
//                .filter(Objects::nonNull) // fixed
//                .collect(Collectors.toMap(Product::getId, p -> p));
//
//        List<ShoppingListDtos.OptimizedItem> optimized = items.stream()
//                .map(item -> {
//                    Product p = productsById.get(item.getProductId());
//                    return new ShoppingListDtos.OptimizedItem(
//                            item.getProductId(),
//                            p != null ? p.getName() : "Unknown product",
//                            item.getQuantity(),
//                            p != null ? p.getAisleNumber() : null,
//                            p != null ? p.getShelfNumber() : null
//                    );
//                })
//                .sorted(Comparator
//                        .comparing(ShoppingListDtos.OptimizedItem::aisleNumber,
//                                Comparator.nullsLast(Comparator.naturalOrder()))
//                        .thenComparing(ShoppingListDtos.OptimizedItem::shelfNumber,
//                                Comparator.nullsLast(Comparator.naturalOrder())))
//                .toList();
//
//        return new ShoppingListDtos.ShoppingListResponse(
//                list.getId(),
//                list.getUserId(),
//                list.getName(),
//                list.getCreatedAt(),
//                optimized
//        );
//    }
//
//}
