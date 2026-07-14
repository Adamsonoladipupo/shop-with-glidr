package com.productservice.glidr.dtos;

import com.productservice.glidr.enums.UserRole;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public class UserDtos {
    public record RegisterRequest(
            @NotBlank String firstName,
            @NotBlank String lastName,
            @Email @NotBlank String email,
            String phoneNumber,
            @NotBlank String password,
            @NotBlank String role
    ) {}

    public record LoginRequest(
            @Email @NotBlank String email,
            @NotBlank String password
    ) {}

    public record UserResponse(
            String id,
            String firstName,
            String lastName,
            String email,
            String phoneNumber,
            UserRole role,
            LocalDateTime createdAt
    ) {}

    public record LoginResponse(
            UserResponse user,
            String token
    ) {}

    private UserDtos() {}

}
