package com.commercial.ekart.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.commercial.ekart.repository.CartRepository;
import com.commercial.ekart.service.CartService;
import com.commercial.ekart.service.LoginService;
import com.commercial.ekart.service.ProductService;
import com.commercial.ekart.utils.ResponseVo;

import java.lang.annotation.Repeatable;

import org.hibernate.internal.build.AllowSysOut;
import org.slf4j.helpers.Reporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	@Autowired
	private LoginService loginService;
	
	@GetMapping("/getcart/{userId}")
	public ResponseEntity<?> getCart(@PathVariable int userId) {
		
		ResponseVo responseVo= new ResponseVo();
		try {
		boolean isIdPresent=	loginService.userIdValidate(userId);
		if(isIdPresent) {
		responseVo.setResponseCode(200);
		responseVo.setResponseMessage("Success");
		responseVo.setResponseData(cartService.getAllCart(userId));
		return ResponseEntity.status(HttpStatus.OK).body(responseVo);
		}else {
			responseVo.setResponseCode(400);
			responseVo.setResponseMessage("Id Not Present");
			responseVo.setResponseData(null);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseVo);
		}
		}catch (Exception e) {
			responseVo.setResponseCode(500);
			responseVo.setResponseMessage("Internal Server Errror");
			responseVo.setResponseData(null);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseVo);
		}
	}
	@DeleteMapping("/deletecart/{cartId}")
	public ResponseEntity<?> deleteCart(@PathVariable int cartId) {
		ResponseVo responseVo= new ResponseVo();
		try {
		boolean isCartDeleted=cartService.deleteCart(cartId);
		if(isCartDeleted) {
			responseVo.setResponseCode(200);
			responseVo.setResponseMessage("Ok");
			return ResponseEntity.status(HttpStatus.OK).body(responseVo);
		}else {
			responseVo.setResponseCode(400);
			responseVo.setResponseMessage("Id Not Found");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseVo);
		}
		}catch (Exception e) {
			responseVo.setResponseCode(500);
			responseVo.setResponseMessage("Internal Server Error");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseVo);
		}
	}

}
