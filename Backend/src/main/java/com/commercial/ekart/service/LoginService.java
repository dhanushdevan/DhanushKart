package com.commercial.ekart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.commercial.ekart.entity.UserDeatilsTable;
import com.commercial.ekart.pojo.CreateUser;
import com.commercial.ekart.repository.UserDetailsRepo;
import com.commercial.ekart.serviceimplementation.LoginServiceInterface;

@Service
public class LoginService implements LoginServiceInterface {
	
	@Autowired
	private UserDetailsRepo  userDetailsRepo;

	@Override
	public CreateUser createUserService(CreateUser user) {
		UserDeatilsTable  userDetailsTable= new UserDeatilsTable();
		boolean isPresent=userDetailsValidate(user.getuserName());
		if(!isPresent) {
		userDetailsTable.setAge(user.getAge());
		userDetailsTable.setGender(user.getGender());
		userDetailsTable.setPassword(user.getPassword());
		userDetailsTable.setUserName(user.getuserName());
		UserDeatilsTable details=userDetailsRepo.save(userDetailsTable);
		System.out.println("User name present ");
		user.setId(details.getId());
		return user;
		}else {
			
			return null;
		}
		
	}

	@Override
	public boolean userDetailsValidate(String userName) {
		Optional<String> isUser=userDetailsRepo.findByUserName(userName);
		if(isUser.isPresent()) {
			return true;
		}
		return false;
	}

	@Override
	public boolean userIdValidate(int id) {
		Optional<UserDeatilsTable> isUser=userDetailsRepo.findById(id);
		if(isUser.isEmpty()) {
			return false;
		}
		return true;
	}
	@Override
	public CreateUser getUserDeatils(String name) {
		Optional<UserDeatilsTable> userDetails=userDetailsRepo.findUserDetails(name);
		if(userDetails.isPresent()) {
			CreateUser user=new CreateUser();
			user.setAge(userDetails.get().getAge());
			user.setuserName(userDetails.get().getUserName());
			user.setId(userDetails.get().getId());
			user.setGender(userDetails.get().getGender());
			return user;
		}
		return null;
	}
	
	

}
