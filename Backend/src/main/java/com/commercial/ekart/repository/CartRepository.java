package com.commercial.ekart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.commercial.ekart.entity.CartEntity;

public interface CartRepository extends JpaRepository<CartEntity, Integer>{
	
	@Query("SELECT c.id, c.productId, p.productName, p.description, p.price, c.quantity " +
		       "FROM CartEntity c JOIN ProductEntity p ON p.productId = c.productId " +
		       "WHERE c.userId = :userId AND c.isDelete=false AND p.isDeleted=false")
	public List<Object[]> getAllCardByUser(@Param("userId") int userId);


}



