package com.commercial.ekart.controller;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.commercial.ekart.pojo.CreateUser;
import com.commercial.ekart.pojo.LoginDto;
import com.commercial.ekart.serviceimplementation.LoginServiceInterface;
import com.commercial.ekart.utils.ResponseVo;

@RestController
public class LoginController {

	@Autowired
	private LoginServiceInterface loginServiceInterface;

	@GetMapping("/getuser")
	public String getUserDeatils() {
		return "Connected";
	}

	@PostMapping("/createuser")
	public ResponseEntity<?> createUser(@RequestBody CreateUser createUser) {
		ResponseVo responseVo = new ResponseVo();
		System.out.println(createUser.toString());
		System.out.println("UserName CreateUser   "+createUser.getuserName());
		String validateUsernameAndPassword=userNameAndPasswordValid(createUser.getuserName(),createUser.getPassword());
		CreateUser user = loginServiceInterface.createUserService(createUser);
		if(validateUsernameAndPassword==null) {
		if (user == null) {
			responseVo.setResponseCode(400);
			responseVo.setResponseMessage("User already Exist");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseVo);
		}else {
			responseVo.setResponseCode(200);
			responseVo.setResponseMessage("User already Exist");
			responseVo.setResponseData(user);
			return ResponseEntity.status(HttpStatus.OK).body(user);
		}
		}else {
			responseVo.setResponseCode(400);
			responseVo.setResponseMessage(validateUsernameAndPassword);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseVo);
			
		}
	}

	@PostMapping("/login")
	public String loginUser(@RequestBody LoginDto loginDto) {
		boolean isUsernameValid = validateUserNameInDB(loginDto.getUserName());
		if (isUsernameValid) {

			return "Present name";

		} else {
			return "No name present in Db";
		}
	}

	boolean validateUserNameInDB(String userName) {
		boolean isPresentName = loginServiceInterface.userDetailsValidate(userName);

		return isPresentName;

	}
	
	String userNameAndPasswordValid(String userName,String password) {
		int userNameLength=3;
		boolean isValidPassword=isValidatePassword(password);
		if(userName.length()<=userNameLength) {
			return "User Name cannot less than 3";
		}else if(isValidPassword) {
			return "Password Not valid";
		}
		return null;
	}
	
	boolean isValidatePassword(String password) {
		System.out.println("Password   "+password);
		String regex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$";
		Pattern pattern=Pattern.compile(regex);
		Matcher matcher=pattern.matcher(password);
		
		return !matcher.matches();
	}

}
