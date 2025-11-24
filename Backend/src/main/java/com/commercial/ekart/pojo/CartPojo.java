package com.commercial.ekart.pojo;

import java.math.BigDecimal;

public class CartPojo {
//	select c.id,c.product_id,p.product_name,p.description,p.price,c.quantity from cart c join product p on p.product_id=c.product_id where c.user_id=6;
	
	private int cartId;
	private int productId;
	private String productName;
	private String productDescrption;
	private BigDecimal price;
	private int quantity;
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDescrption() {
		return productDescrption;
	}
	public void setProductDescrption(String productDescrption) {
		this.productDescrption = productDescrption;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public CartPojo(int cartId, int productId, String productName, String productDescrption, BigDecimal price,
			int quantity) {
		super();
		this.cartId = cartId;
		this.productId = productId;
		this.productName = productName;
		this.productDescrption = productDescrption;
		this.price = price;
		this.quantity = quantity;
	}
	
	

}
