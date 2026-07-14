package com.productservice.glidr;

import com.productservice.glidr.dtos.UserDtos.LoginRequest;
import com.productservice.glidr.dtos.UserDtos.LoginResponse;
import com.productservice.glidr.dtos.UserDtos.RegisterRequest;
import com.productservice.glidr.dtos.UserDtos.UserResponse;
import com.productservice.glidr.model.User;
import com.productservice.glidr.enums.UserRole;
import com.productservice.glidr.exception.BadRequestException;
import com.productservice.glidr.exception.NotFoundException;
import com.productservice.glidr.repository.UserRepository;
import com.productservice.glidr.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private User savedUser;

    @BeforeEach
    void setup() {
        savedUser = new User();
        savedUser.setFirstName("Ada");
        savedUser.setLastName("Lovelace");
        savedUser.setEmail("ada@trace.com");
        savedUser.setRole(UserRole.CUSTOMER);
        savedUser.setPassword(new BCryptPasswordEncoder().encode("secret"));
    }

    @Test
    void registerUser_success() {
        when(userRepository.existsByEmail("nelly@trace.com")).thenReturn(false);
        when(userRepository.save(any(User.class))).thenReturn(savedUser);

        UserResponse response = userService.registerUser(
                new RegisterRequest("nelly", "Lovelace", "ada@trace.com", null, "secret", "CUSTOMER"));

        assertThat(response.email()).isEqualTo("nelly@trace.com");
        assertThat(response.role()).isEqualTo(UserRole.CUSTOMER);
        verify(userRepository).save(any(User.class));
    }

    @Test
    void registerUser_duplicateEmail_throwsBadRequest() {
        when(userRepository.existsByEmail("nelly@trace.com")).thenReturn(true);

        assertThatThrownBy(() -> userService.registerUser(
                new RegisterRequest("nelly", "Lovelace", "nelly@trace.com", null, "secret", "CUSTOMER")))
                .isInstanceOf(BadRequestException.class)
                .hasMessageContaining("already registered");

        verify(userRepository, never()).save(any());
    }

    @Test
    void registerUser_invalidRole_throwsBadRequest() {
        when(userRepository.existsByEmail("nelly@trace.com")).thenReturn(false);

        assertThatThrownBy(() -> userService.registerUser(
                new RegisterRequest("nelly", "Lovelace", "nelly@trace.com", null, "secret", "SUPERUSER")))
                .isInstanceOf(BadRequestException.class)
                .hasMessageContaining("CUSTOMER or STORE_ADMIN");
    }

    @Test
    void loginUser_success() {
        when(userRepository.findByEmail("ada@trace.com")).thenReturn(Optional.of(savedUser));

        LoginResponse response = userService.loginUser(new LoginRequest("ada@trace.com", "secret"));

        assertThat(response.user().email()).isEqualTo("ada@trace.com");
        assertThat(response.token()).isNotBlank();
    }
}