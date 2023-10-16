package com.TechnoSync.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.TechnoSync.dto.response.CategoryResponse;
import com.TechnoSync.dto.response.ProductResponse;
import com.TechnoSync.model.Category;
import com.TechnoSync.repository.CategoryRepository;
import com.TechnoSync.service.CategoryService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public List<CategoryResponse> getAllCategories() {
        List<Category> categoryList = categoryRepository.findAll();

        return categoryList.stream()
                .map(category -> {
                    CategoryResponse categoryResponse = new CategoryResponse();
                    categoryResponse.setCid(category.getCid());
                    categoryResponse.setCategoryName(category.getCategoryName());
                    List<ProductResponse> productResponses = category.getProducts().stream()
                            .map(product -> {
                                ProductResponse productResponse = new ProductResponse();
                                productResponse.setPid(product.getPid());
                                productResponse.setProductName(product.getProductName());
                                productResponse.setProductPrice(product.getProductPrice());
                                productResponse.setProductQuantity(product.getProductQuantity());
                                productResponse.setProductImage(product.getProductImage());
                                productResponse.setProductDesc(product.getProductDesc());
                                return productResponse;
                            })
                            .collect(Collectors.toList());
                    categoryResponse.setProducts(productResponses);
                    return categoryResponse;
                })
                .collect(Collectors.toList());
    }

}
