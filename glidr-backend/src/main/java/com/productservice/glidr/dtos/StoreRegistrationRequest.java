package com.productservice.glidr.dtos;

import com.productservice.glidr.enums.BusinessType;
import com.productservice.glidr.model.StoreAddress;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StoreRegistrationRequest {
    @NotBlank
    private String businessName;

    private String ownerName;

    @Email
    private String email;

    @NotBlank
    private String password;

    private String phoneNumber;
    private BusinessType businessType;
    private StoreAddress address;
}
