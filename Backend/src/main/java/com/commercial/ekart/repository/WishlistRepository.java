package com.commercial.ekart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.commercial.ekart.entity.WishlistEntity;

public interface WishlistRepository  extends JpaRepository<WishlistEntity, Integer>{

}
