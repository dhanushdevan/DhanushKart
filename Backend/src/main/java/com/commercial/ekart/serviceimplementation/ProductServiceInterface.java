package com.commercial.ekart.serviceimplementation;

import java.util.List;
import com.commercial.ekart.pojo.*;
public interface ProductServiceInterface {
	List<ProductPojo> getAllProductList();
	
	ProductPojo getProductDetails(int productId);
	
	ProductPojo updateProductDetails(int productId,ProductUpdatePojo productUpdatePojo);
	
	boolean deleteProduct(int productId);

}
