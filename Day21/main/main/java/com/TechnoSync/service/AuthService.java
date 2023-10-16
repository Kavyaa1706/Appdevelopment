package com.TechnoSync.service;

import com.TechnoSync.dto.request.AuthenticationRequest;
import com.TechnoSync.dto.request.RegisterRequest;
import com.TechnoSync.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
