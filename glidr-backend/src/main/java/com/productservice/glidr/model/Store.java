package com.productservice.glidr.model;

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
    private String address;
    private String contactNumber;
    private String adminUserId;
    private LocalDateTime createdAt = LocalDateTime.now();
}