package com.commercial.ekart.serviceimplementation;

import com.commercial.ekart.pojo.CreateUser;

public interface LoginServiceInterface {
	
	CreateUser createUserService(CreateUser user);
	boolean userDetailsValidate(String userName);
   CreateUser getUserDeatils(String name);
   boolean userIdValidate(int id);
}
