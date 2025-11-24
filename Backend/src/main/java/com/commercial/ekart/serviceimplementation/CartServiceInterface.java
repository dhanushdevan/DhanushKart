package com.commercial.ekart.serviceimplementation;

import java.util.List;

import com.commercial.ekart.pojo.*;
public interface CartServiceInterface {
	
	List<CartPojo> getAllCart(int userId);
	
	boolean deleteCart(int id);
}
