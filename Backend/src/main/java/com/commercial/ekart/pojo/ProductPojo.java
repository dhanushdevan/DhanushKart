package com.commercial.ekart.pojo;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;


public class ProductPojo  implements Serializable{

	private Integer productId;
	
	private String productName;
	private String description;

	private BigDecimal price;

	private Integer stockQuantity;

	private String brand;

	private String imageUrl;

	private String status;

	private boolean isDeleted;

	private Timestamp  createdAt;

	private Timestamp updatedAt;

	
public Integer getProductId() {
		return productId;
	}


	public void setProductId(Integer productId) {
		this.productId = productId;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public BigDecimal getPrice() {
		return price;
	}


	public void setPrice(BigDecimal price) {
		this.price = price;
	}


	public Integer getStockQuantity() {
		return stockQuantity;
	}


	public void setStockQuantity(Integer stockQuantity) {
		this.stockQuantity = stockQuantity;
	}


	public String getBrand() {
		return brand;
	}


	public void setBrand(String brand) {
		this.brand = brand;
	}


	public String getImageUrl() {
		return imageUrl;
	}


	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public boolean isDeleted() {
		return isDeleted;
	}


	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}


	public Timestamp getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}


	public Timestamp getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(Timestamp updatedAt) {
		this.updatedAt = updatedAt;
	}


public ProductPojo(Integer productId, String productName, String description, BigDecimal price,
			Integer stockQuantity, String brand, String imageUrl, String status, boolean isDeleted, Timestamp createdAt,
			Timestamp updatedAt) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.description = description;
		this.price = price;
		this.stockQuantity = stockQuantity;
		this.brand = brand;
		this.imageUrl = imageUrl;
		this.status = status;
		this.isDeleted = isDeleted;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}


public ProductPojo(){};
	
}
