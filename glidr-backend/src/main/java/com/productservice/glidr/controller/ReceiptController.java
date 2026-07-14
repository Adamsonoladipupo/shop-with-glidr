package com.productservice.glidr.controller;

import com.productservice.glidr.dtos.ReceiptDtos;
import com.productservice.glidr.service.ReceiptService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/receipts")
@RequiredArgsConstructor
public class ReceiptController {
    private final ReceiptService receiptService;

    @GetMapping
    public List<ReceiptDtos.ReceiptResponse> getReceipts(@RequestParam String userId) {
        return receiptService.getReceipts(userId);
    }

    @GetMapping("/{receiptId}")
    public ReceiptDtos.ReceiptDetailResponse getReceiptDetails(@PathVariable String receiptId) {
        return receiptService.getReceiptDetails(receiptId);
    }
}
