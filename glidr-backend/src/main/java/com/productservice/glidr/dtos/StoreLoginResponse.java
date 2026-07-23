package com.productservice.glidr.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StoreLoginResponse {
    private String token;
    private StoreResponse store;
}
