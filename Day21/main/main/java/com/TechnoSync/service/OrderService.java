package com.TechnoSync.service;

import java.util.List;

import com.TechnoSync.dto.request.OrderRequest;
import com.TechnoSync.dto.response.CountResponse;
import com.TechnoSync.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();

}
