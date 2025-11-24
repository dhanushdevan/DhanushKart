package com.commercial.ekart.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.commercial.ekart.entity.UserDeatilsTable;

public interface UserDetailsRepo extends  JpaRepository<UserDeatilsTable, Integer> {
	
	@Query("SELECT u.userName FROM UserDeatilsTable u WHERE u.userName = :name")
    Optional<String> findByUserName(@Param("name") String name);
	
	@Query("SELECT u FROM UserDeatilsTable u WHERE u.userName = :name")
	Optional<UserDeatilsTable> findUserDetails(@Param("name") String name);
}
