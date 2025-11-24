package com.commercial.ekart.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.commercial.ekart.entity.CartEntity;
import com.commercial.ekart.pojo.CartPojo;
import com.commercial.ekart.repository.CartRepository;
import com.commercial.ekart.serviceimplementation.CartServiceInterface;
@Service
public class CartService implements CartServiceInterface {
	@Autowired
	private CartRepository  cartRepository ;
	

	@Override
	public List<CartPojo> getAllCart(int userId) {
		try {
		List<Object[]> repo=cartRepository.getAllCardByUser(userId);
		List<CartPojo> cartList=repo
			    .stream()
			    .map(row -> new CartPojo(
			            ((Number) row[0]).intValue(),  // c.id
			            ((Number) row[1]).intValue(),  // c.product_id
			            (String) row[2],               // p.product_name
			            (String) row[3],               // p.description
			            (BigDecimal) row[4],           // p.price
			            ((Number) row[5]).intValue()   // c.quantity
			    ))
			    .collect(Collectors.toList());
		return cartList;
		}catch (Exception e) {
			System.out.println("Exception In Cart Service "+e.getMessage());
			return null;
		}
	}


	@Override
	public boolean deleteCart(int id) {
		try{
			Optional<CartEntity> optinolCartEntity=cartRepository.findById(id);
			if(optinolCartEntity.isEmpty() || optinolCartEntity.get().isDelete()) {
				return false;
			}else {
				CartEntity cartEntity=optinolCartEntity.get();
				cartEntity.setDelete(true);
				cartRepository.save(cartEntity);
				return true;
			}
		}catch (Exception e) {
			// TODO: handle exception
		}
		return false;
	}

}
