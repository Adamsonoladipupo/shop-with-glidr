package com.productservice.glidr.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "category_locations")
@Getter
@Setter
@NoArgsConstructor
public class CategoryLocation {
    @Id
    private String id  = UUID.randomUUID().toString();
    private String storeId;
    private String categoryId;
    private Integer aisleNumber;
    private Integer shelfNumber;

}
