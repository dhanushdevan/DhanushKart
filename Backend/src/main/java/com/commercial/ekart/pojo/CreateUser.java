package com.commercial.ekart.pojo;

public class CreateUser {
	private int id;
	private String userName;
	private String gender;
	private int age;
	private String password;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getuserName() {
		return userName;
	}
	public void setuserName(String userName) {
		this.userName = userName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "CreateUser [id=" + id + ", userName=" + userName + ", gender=" + gender + ", age=" + age + ", password="
				+ password + "]";
	}
	
	
}
