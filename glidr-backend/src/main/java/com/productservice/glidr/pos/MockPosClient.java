package com.productservice.glidr.pos;

import com.productservice.glidr.model.POSIntegration;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Component
public class MockPosClient implements PosClient{
    @Override
    public String providerName() { return "mock"; }

    @Override
    public List<PosProductDto> fetchProducts(POSIntegration integration) {
        return List.of(
                new PosProductDto(UUID.randomUUID().toString(), "Whole Milk 1L", "Fresh dairy", new BigDecimal("1.20"), 80, "Dairy"),
                new PosProductDto(UUID.randomUUID().toString(), "Brown Bread 500g", "Sliced loaf", new BigDecimal("0.95"), 40, "Bakery"),
                new PosProductDto(UUID.randomUUID().toString(), "Basmati Rice 2kg", "Long grain", new BigDecimal("4.50"), 25, "Grains"),
                new PosProductDto(UUID.randomUUID().toString(), "Tomatoes 1kg", "Fresh produce", new BigDecimal("1.80"), 60, "Produce")
        );
    }

    @Override
    public List<PosInventoryDto> fetchInventory(POSIntegration integration) {
        return List.of(
                new PosInventoryDto(UUID.randomUUID().toString(), 75),
                new PosInventoryDto(UUID.randomUUID().toString(), 38)
        );
    }

    @Override
    public List<PosReceiptDto> fetchReceipts(POSIntegration integration) {
        return List.of(
                new PosReceiptDto(
                        "RCPT-" + System.currentTimeMillis(),
                        null,
                        Instant.now(),
                        new BigDecimal("6.65"),
                        List.of(
                                new PosReceiptDto.Line(UUID.randomUUID().toString(), 2, new BigDecimal("1.20"), new BigDecimal("2.40")),
                                new PosReceiptDto.Line(UUID.randomUUID().toString(), 1, new BigDecimal("4.50"), new BigDecimal("4.25"))
                        )
                )
        );
    }
}
