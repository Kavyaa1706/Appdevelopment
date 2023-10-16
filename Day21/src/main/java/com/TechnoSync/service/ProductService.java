package com.TechnoSync.service;

import java.util.List;

import com.TechnoSync.dto.request.ProductRequest;
import com.TechnoSync.dto.response.CountResponse;
import com.TechnoSync.dto.response.ProductResponse;
import com.TechnoSync.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

    CountResponse productCount();

}
