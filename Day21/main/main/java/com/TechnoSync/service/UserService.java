package com.TechnoSync.service;

import java.util.List;

import com.TechnoSync.dto.request.UserRequest;
import com.TechnoSync.dto.response.CountResponse;
import com.TechnoSync.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}
