package com.productservice.glidr.service;

import com.productservice.glidr.dtos.UserDtos.*;
import com.productservice.glidr.model.User;
import com.productservice.glidr.enums.UserRole;
import com.productservice.glidr.exception.BadRequestException;
import com.productservice.glidr.exception.NotFoundException;
import com.productservice.glidr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserResponse registerUser(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new BadRequestException("Email already registered: " + request.email());
        }
        UserRole role;
        try {
            role = UserRole.valueOf(request.role().toUpperCase());
        } catch (IllegalArgumentException ex) {
            throw new BadRequestException("role must be CUSTOMER or STORE_ADMIN");
        }
        User user = new User();
        user.setFirstName(request.firstName());
        user.setLastName(request.lastName());
        user.setEmail(request.email());
        user.setPhoneNumber(request.phoneNumber());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRole(role);
        return toResponse(userRepository.save(user));
    }

    public LoginResponse loginUser(LoginRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new NotFoundException("Invalid email or password"));
        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new NotFoundException("Invalid email or password");
        }
        String token = "stub-token-" + user.getId();
        return new LoginResponse(toResponse(user), token);
    }

    private UserResponse toResponse(User user) {
        return new UserResponse(user.getId(), user.getFirstName(), user.getLastName(),
                user.getEmail(), user.getPhoneNumber(), user.getRole(), user.getCreatedAt());
    }
}
