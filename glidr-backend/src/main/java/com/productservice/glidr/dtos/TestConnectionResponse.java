package com.productservice.glidr.dtos;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TestConnectionResponse {
        private boolean connected;
        private String message;
        private long responseTime;
        private String provider;
}
