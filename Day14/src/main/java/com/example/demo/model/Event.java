package com.example.demo.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	
	public String fullname;
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getProjects() {
		return projects;
	}
	public void setProjects(String projects) {
		this.projects = projects;
	}
	public int getBudget() {
		return budget;
	}
	public void setBudget(int budget) {
		this.budget = budget;
	}
	private String number;
	private Date date;
	private String address;
	private String projects;
	@Override
	public String toString() {
		return "Event [Id=" + Id + ",fullname=" + fullname +", number=" + number + ", date=" + date + ", address=" + address + ", projects="
				+ projects + ", budget=" + budget + "]";
	}
	private int budget;
	public Event(Long id, String number, Date date, String address, String projects, int budget, String fullname) {
		super();
		Id = id;
		this.fullname = fullname;
		this.number = number;
		this.date = date;
		this.address = address;
		this.projects = projects;
		this.budget = budget;
	}
	public Event() {
		
	}
}
