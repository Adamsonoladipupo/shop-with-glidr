package com.productservice.glidr.model;

import com.productservice.glidr.enums.BusinessType;
import com.productservice.glidr.enums.StoreStatus;
import com.productservice.glidr.enums.VerificationStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "stores")
@Getter
@Setter
@NoArgsConstructor
public class Store {

    @Id
    private String id = UUID.randomUUID().toString();
    private String name;
    private String contactNumber;
    private String adminUserId;
    private String businessName;
    private String ownerName;
    private String email;
    private String phoneNumber;
    private String password;
    private String logo;
    private BusinessType businessType;
    private StoreAddress address;
    private StoreStatus status;
    private VerificationStatus verificationStatus;
    private LocalDateTime updatedAt;
    private LocalDateTime lastLoginAt;
    private LocalDateTime createdAt = LocalDateTime.now();
}