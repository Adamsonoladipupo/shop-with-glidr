package com.productservice.glidr.dtos;

import com.productservice.glidr.model.StoreAddress;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UpdateStoreRequest {
    private String businessName;
    private String ownerName;
    private String phoneNumber;
    private String logo;
    private StoreAddress address;
}
