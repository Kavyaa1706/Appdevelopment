package com.example.demo.Service;

import com.techno.dto.request.AuthenticationRequest;
import com.techno.dto.request.RegisterRequest;
import com.techno.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
