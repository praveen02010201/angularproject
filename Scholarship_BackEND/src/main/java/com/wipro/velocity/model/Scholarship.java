package com.wipro.velocity.model;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Document
public class Scholarship {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;
	
	private String country;
	
	private String state;
	
	private String appstart;
	
	private String append;
	
	private Date date;
	
	private int time;
	
	private int students;
	
	private int capacity;
	public int getStudents() {
		return students;
	}

	public void setStudents(int students) {
		this.students = students;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	private float amount;

	private float eamount;
	public Scholarship() {
		super();
	}

	public Scholarship(String id, String country, String state, String appstart, String append, Date date, int time, int students,int capacity,float amount, float eamount) {
		this.id = id;
		this.country = country;
		this.state = state;
		this.appstart = appstart;
		this.append = append;
		this.date = date;
		this.time=time;
		this.students=students;
		this.capacity=capacity;
		this.amount = amount;
		this.eamount= eamount;
		
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}


	

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getAppstart() {
		return appstart;
	}

	public void setAppstart(String appstart) {
		this.appstart=appstart;
	}

	public String getAppend() {
		return append;
	}

	public void setAppend(String append) {
		this.append = append;
	}

	

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time= time;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}
      public float getEamount() {
		return eamount;
	}

	public void setEamount(float eamount) {
		this.eamount = eamount;
	}

	

}
