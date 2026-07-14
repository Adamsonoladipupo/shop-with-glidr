package com.productservice.glidr.controller;

import com.productservice.glidr.dtos.UserDtos;
import com.productservice.glidr.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserDtos.UserResponse registerUser(@Valid @RequestBody UserDtos.RegisterRequest request) {
        return userService.registerUser(request);
    }

    @PostMapping("/login")
    public UserDtos.LoginResponse loginUser(@Valid @RequestBody UserDtos.LoginRequest request) {
        return userService.loginUser(request);
    }
}
