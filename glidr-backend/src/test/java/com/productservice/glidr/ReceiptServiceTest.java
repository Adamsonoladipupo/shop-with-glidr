package com.productservice.glidr;

import com.productservice.glidr.dtos.ReceiptDtos.ReceiptDetailResponse;
import com.productservice.glidr.dtos.ReceiptDtos.ReceiptResponse;
import com.productservice.glidr.model.Receipt;
import com.productservice.glidr.model.ReceiptItem;
import com.productservice.glidr.event.ReceiptCreatedEvent;
import com.productservice.glidr.exception.NotFoundException;
import com.productservice.glidr.repository.ProductRepository;
import com.productservice.glidr.repository.ReceiptItemRepository;
import com.productservice.glidr.repository.ReceiptRepository;
import com.productservice.glidr.service.ReceiptService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ReceiptServiceTest {

    @Mock private ReceiptRepository receiptRepository;
    @Mock private ReceiptItemRepository receiptItemRepository;
    @Mock private ProductRepository productRepository;

    @InjectMocks private ReceiptService receiptService;

    private Receipt receipt;
    private ReceiptItem receiptItem;

    @BeforeEach
    void setup() {
        receipt = new Receipt();
        receipt.setUserId("user-1");
        receipt.setReceiptNumber("RCPT-001");
        receipt.setPurchasedDate(LocalDateTime.now());
        receipt.setTotalPrice(new BigDecimal("6.65"));
        receipt.setStatus("PAID");

        receiptItem = new ReceiptItem();
        receiptItem.setReceiptId(receipt.getId());
        receiptItem.setProductId("prod-1");
        receiptItem.setQuantity(2);
        receiptItem.setUnitPrice(new BigDecimal("1.20"));
        receiptItem.setSubTotal(new BigDecimal("2.40"));
    }

    @Test
    void getReceipts_returnsUserReceipts() {
        when(receiptRepository.findByUserId("user-1")).thenReturn(List.of(receipt));

        List<ReceiptResponse> results = receiptService.getReceipts("user-1");

        assertThat(results).hasSize(1);
        assertThat(results.get(0).receiptNumber()).isEqualTo("RCPT-001");
    }

    @Test
    void getReceiptDetails_returnsWithItems() {
        when(receiptRepository.findById("rcpt-id")).thenReturn(Optional.of(receipt));
        when(receiptItemRepository.findByReceiptId("rcpt-id")).thenReturn(List.of(receiptItem));

        ReceiptDetailResponse detail = receiptService.getReceiptDetails("rcpt-id");

        assertThat(detail.receiptNumber()).isEqualTo("RCPT-001");
        assertThat(detail.items()).hasSize(1);
        assertThat(detail.items().get(0).quantity()).isEqualTo(2);
    }

    @Test
    void getReceiptDetails_notFound_throws() {
        when(receiptRepository.findById(anyString())).thenReturn(Optional.empty());

        assertThatThrownBy(() -> receiptService.getReceiptDetails("bad-id"))
                .isInstanceOf(NotFoundException.class);
    }

    @Test
    void onReceiptCreated_persistsReceiptAndItems() {
        when(receiptRepository.findByReceiptNumber("RCPT-001")).thenReturn(Optional.empty());
        when(receiptRepository.save(any())).thenReturn(receipt);
        when(productRepository.findByStoreIdAndExternalId(anyString(), anyString())).thenReturn(Optional.empty());

        ReceiptCreatedEvent event = new ReceiptCreatedEvent(
                "store-abc", "user-1", "RCPT-001", Instant.now(), new BigDecimal("6.65"),
                List.of(new ReceiptCreatedEvent.LineItem("ext-001", 2, new BigDecimal("1.20"), new BigDecimal("2.40")))
        );

        receiptService.onReceiptCreated(event);

        verify(receiptRepository).save(any(Receipt.class));
        verify(receiptItemRepository).save(any(ReceiptItem.class));
    }

    @Test
    void onReceiptCreated_duplicateReceiptNumber_skipsIdempotently() {
        when(receiptRepository.findByReceiptNumber("RCPT-001")).thenReturn(Optional.of(receipt));

        ReceiptCreatedEvent event = new ReceiptCreatedEvent(
                "store-abc", "user-1", "RCPT-001", Instant.now(), new BigDecimal("6.65"), List.of()
        );

        receiptService.onReceiptCreated(event);

        verify(receiptRepository, never()).save(any());
    }
}