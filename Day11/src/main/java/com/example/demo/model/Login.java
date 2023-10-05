package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_data")
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int lid;
	public int getLid() {
		return lid;
	}

	public void setLid(int lid) {
		this.lid = lid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	private String username;
	private String password;

	public Login(int lid, String username, String password) {
		super();
		this.lid = lid;
		this.username = username;
		this.password = password;
	}

	@Override
	public String toString() {
		return "Login [lid=" + lid + ", username=" + username + ", password=" + password + ", getLid()=" + getLid()
				+ ", getUsername()=" + getUsername() + ", getPassword()=" + getPassword() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	public Login() {
		
	}

}
