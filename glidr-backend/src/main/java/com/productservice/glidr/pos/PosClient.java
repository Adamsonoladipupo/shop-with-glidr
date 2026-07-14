package com.productservice.glidr.pos;

import com.productservice.glidr.model.POSIntegration;


import java.util.List;

public interface PosClient {
    String providerName();

    List<PosProductDto> fetchProducts(POSIntegration integration);

    List<PosInventoryDto> fetchInventory(POSIntegration integration);

    List<PosReceiptDto> fetchReceipts(POSIntegration integration);

}
