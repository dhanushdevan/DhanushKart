package com.commercial.ekart.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.commercial.ekart.entity.ProductEntity;
import com.commercial.ekart.pojo.ProductPojo;
import com.commercial.ekart.pojo.ProductUpdatePojo;
import com.commercial.ekart.repository.ProductRepository;
import com.commercial.ekart.serviceimplementation.ProductServiceInterface;
import com.commercial.ekart.entity.*;
@Service
public class ProductService  implements ProductServiceInterface{
	@Autowired
	private ProductRepository productRepository;
	
	@Cacheable(value = "products",key="'products'")
	@Override
	public List<ProductPojo> getAllProductList() {
		List<ProductEntity> listOfProductEntity=productRepository.findAll();
		List<ProductPojo> listOfProductPojo= new ArrayList<>();
		for (ProductEntity productEntity : listOfProductEntity) {
			if(!productEntity.isDeleted()) {
				System.out.println("Cache npot used"+productEntity.getProductId());
			ProductPojo productPojo= new ProductPojo(productEntity.getProductId(),productEntity.getProductName(),productEntity.getDescription(),
					productEntity.getPrice(),productEntity.getStockQuantity(),productEntity.getBrand(),productEntity.getImageUrl(),productEntity.getStatus(),
					productEntity.isDeleted(),productEntity.getCreatedAt(),productEntity.getUpdatedAt());
			listOfProductPojo.add(productPojo);
			}
			
		}
		return listOfProductPojo ;
	}

	
	@Override
	public ProductPojo getProductDetails(int productId) {
		Optional<ProductEntity> productEntity=productRepository.findById(productId);
		if(productEntity.isEmpty() || productEntity.get().isDeleted()) {
			return null;
		}else {
			ProductEntity productEntityData=productEntity.get();
			ProductPojo productPojo = new ProductPojo(productEntityData.getProductId(),productEntityData.getProductName(),productEntityData.getDescription()
					,productEntityData.getPrice(),productEntityData.getStockQuantity(),productEntityData.getBrand(),productEntityData.getImageUrl()
					,productEntityData.getStatus(),productEntityData.isDeleted(),productEntityData.getCreatedAt(),productEntityData.getUpdatedAt());
			
		return productPojo;
		}

	}


	@Override
	public ProductPojo updateProductDetails(int productId, ProductUpdatePojo productUpdatePojo) {
		Optional<ProductEntity> productEntity=productRepository.findById(productId);
		if(productEntity.isEmpty()  || productEntity.get().isDeleted()) {
			return null;
		}else {
		ProductEntity productEntityUpdate=productEntity.get();
		productEntityUpdate.setProductId(productId);
		if(productUpdatePojo.getBrand()!=null) {
			productEntityUpdate.setBrand(productUpdatePojo.getBrand());
		}
		if(productUpdatePojo.getDescription()!=null) {
			productEntityUpdate.setDescription(productUpdatePojo.getDescription());
		}
		if(productUpdatePojo.getImageUrl()!=null) {
			productEntityUpdate.setImageUrl(productUpdatePojo.getImageUrl());
		}
		if(productUpdatePojo.getPrice()!=null) {
			productEntityUpdate.setPrice(productUpdatePojo.getPrice());
		}
		if(productUpdatePojo.getProductName()!=null) {
			productEntityUpdate.setProductName(productUpdatePojo.getProductName());
		}
		if(productUpdatePojo.getStockQuantity()!=null) {
			productEntityUpdate.setStockQuantity(productUpdatePojo.getStockQuantity());
		}
		if(productUpdatePojo.getStatus()!=null) {
			productEntityUpdate.setStatus(productUpdatePojo.getStatus());
		}
		ProductEntity  productUpdatedEntity=productRepository.save(productEntityUpdate);
		ProductPojo productPojo= new ProductPojo(productUpdatedEntity.getProductId(),productUpdatedEntity.getProductName(),productUpdatedEntity.getDescription(),
				productUpdatedEntity.getPrice(),productUpdatedEntity.getStockQuantity(),productUpdatedEntity.getBrand(),productUpdatedEntity.getImageUrl(),productUpdatedEntity.getStatus(),
				productUpdatedEntity.isDeleted(),productUpdatedEntity.getCreatedAt(),productUpdatedEntity.getUpdatedAt());
		
		return productPojo ;
	}
	}


	@Override
	public boolean deleteProduct(int productId) {
		Optional<ProductEntity> productEntity=productRepository.findById(productId);
		if(productEntity.isEmpty()  || productEntity.get().isDeleted()) {
			return false;
		}else {
			ProductEntity entityProduct=productEntity.get();
			entityProduct.setDeleted(true);
		ProductEntity  productUpdatedEntity=productRepository.save(entityProduct);
		
		return true;
	}

}
}
