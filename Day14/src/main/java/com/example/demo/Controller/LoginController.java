package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.LoginService;
import com.example.demo.model.Login;

@RestController
@CrossOrigin("*")

public class LoginController {
	
	 @Autowired
	    public LoginService login;
	 

	    @GetMapping("/Login/{username}/{password}")
	    public String getlogin(@PathVariable String username, @PathVariable String password)
	    {
	        List<Login> le = new ArrayList<>();
	        le = login.getLoginData(username, password);

	        if(!le.isEmpty()) {
	            return "Login Successfull";
	        }
	        else {
	            return "Login Failed";
	        }

	    }

	public LoginController() {
		
	}

}
