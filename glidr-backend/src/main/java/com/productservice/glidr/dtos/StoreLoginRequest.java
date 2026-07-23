package com.productservice.glidr.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StoreLoginRequest {
    private String email;
    private String password;
}
