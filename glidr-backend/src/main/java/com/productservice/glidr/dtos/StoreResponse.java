package com.productservice.glidr.dtos;

import com.productservice.glidr.enums.BusinessType;
import com.productservice.glidr.enums.StoreStatus;
import com.productservice.glidr.enums.VerificationStatus;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class StoreResponse {
    private String id;
    private String businessName;
    private String ownerName;
    private String email;
    private String logo;
    private String phoneNumber;
    private BusinessType businessType;
    private StoreStatus status;
    private VerificationStatus verificationStatus;
}
