package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Login;

public interface LoginRepository extends JpaRepository<Login,Integer> {

	 public List<Login> findByUsernameAndPassword(String username, String password);
}
