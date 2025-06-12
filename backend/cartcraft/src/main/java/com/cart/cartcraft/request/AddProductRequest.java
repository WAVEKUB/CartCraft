package com.cart.cartcraft.request;

import com.cart.cartcraft.model.Category;

import lombok.Data;

@Data
public class AddProductRequest {
    private Long id;
    private String name;
    private String brand;
    private Double price;
    private Integer quantity;
    private String description;

    private Category category;
}
