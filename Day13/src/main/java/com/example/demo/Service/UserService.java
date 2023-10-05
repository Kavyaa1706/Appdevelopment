package com.example.demo.Service;

import java.util.List;

import com.techno.dto.request.UserRequest;
import com.techno.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
