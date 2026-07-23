package com.productservice.glidr.dtos;

import com.productservice.glidr.enums.StoreStatus;
import com.productservice.glidr.enums.VerificationStatus;
import com.productservice.glidr.model.StoreAddress;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class StoreProfileResponse {
    private String id;
    private String businessName;
    private String ownerName;
    private String email;
    private String phoneNumber;
    private String logo;
    private StoreStatus status;
    private VerificationStatus verificationStatus;
    private StoreAddress address;
}
