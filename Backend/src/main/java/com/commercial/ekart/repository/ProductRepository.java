package com.commercial.ekart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.commercial.ekart.entity.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
	

}
