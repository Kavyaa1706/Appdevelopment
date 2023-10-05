package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.LoginRepository;
import com.example.demo.model.Login;

@Service

public class LoginService {
	
	 @Autowired
	    public LoginRepository lr;

	    public List <Login> getLoginData(String username, String password) {

	        return lr.findByUsernameAndPassword(username,password);

	
}
}