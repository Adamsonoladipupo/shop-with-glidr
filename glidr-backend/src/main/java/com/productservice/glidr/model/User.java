package com.productservice.glidr.model;


import com.productservice.glidr.enums.UserRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    private String id = UUID.randomUUID().toString();
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String password;
    private UserRole role;
    private LocalDateTime createdAt = LocalDateTime.now();
}