package com.commercial.ekart.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;

import com.commercial.ekart.pojo.ProductPojo;
import com.commercial.ekart.pojo.ProductUpdatePojo;
import com.commercial.ekart.service.ProductService;
import com.commercial.ekart.utils.ResponseVo;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/product")
//@CrossOrigin(origins = "http://localhost:3000") 
public class ProductController {

	@Autowired
	private ProductService productService;

	@GetMapping("/getallproduct")
	public ResponseEntity<?> getAllProducts() {
		ResponseVo responseVo = new ResponseVo();
		try {
			List<ProductPojo> productList = productService.getAllProductList();

			responseVo.setResponseCode(200);
			responseVo.setResponseMessage("Success");
			responseVo.setResponseData(productList);
			return ResponseEntity.status(HttpStatus.OK).body(responseVo);
		} catch (Exception e) {
			responseVo.setResponseCode(500);
			responseVo.setResponseMessage("Internal Server Error");
			responseVo.setResponseData(e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseVo);
		}
	}

	@GetMapping("/getproduct/{productId}")
	public ResponseEntity<?> getproductBYId(@PathVariable int productId) {
		ResponseVo responseVo = new ResponseVo();
		try {
			ProductPojo productPojo = productService.getProductDetails(productId);

			if (productPojo == null) {
				responseVo.setResponseCode(404);
				responseVo.setResponseMessage("Id Not Found");
				responseVo.setResponseData(productPojo);
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseVo);
			} else {
				responseVo.setResponseCode(200);
				responseVo.setResponseMessage("Success");
				responseVo.setResponseData(productPojo);
				return ResponseEntity.status(HttpStatus.OK).body(responseVo);
			}
		} catch (Exception e) {
			responseVo.setResponseCode(500);
			responseVo.setResponseMessage("Internal Server Error");
			responseVo.setResponseData(null);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseVo);
		}
	}

	@PutMapping("/update/{productId}")
	public ResponseEntity<?> updateProduct(@PathVariable int productId,
			@RequestBody ProductUpdatePojo productUpdatepojo) {
		ResponseVo responseVo = new ResponseVo();
		try {
			ProductPojo productPojo = productService.updateProductDetails(productId, productUpdatepojo);
			if (productPojo == null) {
				responseVo.setResponseCode(400);
				responseVo.setResponseMessage("Id Not Present");
				responseVo.setResponseData("");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseVo);
			} else {
				responseVo.setResponseCode(200);
				responseVo.setResponseMessage("Success");
				responseVo.setResponseData(productPojo);
				return ResponseEntity.status(HttpStatus.OK).body(responseVo);
			}
		} catch (Exception e) {
			responseVo.setResponseCode(500);
			responseVo.setResponseMessage("Internal Server Error");
			responseVo.setResponseData(e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseVo);
		}

	}

	@DeleteMapping("/deleteproduct/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable int id) {
		ResponseVo responseVo = new ResponseVo();
		try {
			boolean isDeleted = productService.deleteProduct(id);
			if (isDeleted) {
				responseVo.setResponseCode(204);
				responseVo.setResponseMessage("No content");
				responseVo.setResponseData(null);
				return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
			} else {
				responseVo.setResponseCode(400);
				responseVo.setResponseMessage("Id Not Found :" + id);
				responseVo.setResponseData(null);

				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseVo);
			}
		} catch (Exception e) {
			responseVo.setResponseCode(500);
			responseVo.setResponseMessage("Internal Server Error");
			responseVo.setResponseData(null);

			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseVo);

		}

	}

}
