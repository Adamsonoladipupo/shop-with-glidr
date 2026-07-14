package com.productservice.glidr.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document (collection = "categories")
@Getter
@Setter
@NoArgsConstructor
public class Category {
    @Id
    private String id = UUID.randomUUID().toString();
    private String name;
    private String code;

}
