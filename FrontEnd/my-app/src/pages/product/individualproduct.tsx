import React, { use, useState } from "react";
import product from "../../Data/product.json";
import './individualproduct.css';
import Header from "../../component/header/header";

type IndividualProductProps = {
  id: number;
  /** optional callback parent can provide to receive events from this component */
  onAddToBag?: (productId: number, isloginedin: boolean) => void;
};
function IndividualProduct({ id, onAddToBag }: IndividualProductProps) {
  const [isloginedin, setIsloginedin] = useState(false);

    return(
        <div>
            {product.phones.filter(phone => phone.id === id).map((phone) => (
               <div key={phone.id} className="product-image">
                <div>
                  <img src={phone.image_url} alt={phone.name} />
                </div>
                <div className="product-details" style={{display:'flex',gap:'10px',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column'}}>
                  <h1>{phone.name}</h1>
                  <p>{phone.description}</p>
                  <h2>Price: ${phone.price.toFixed(2)}</h2>
                  <p>Quantity in Stock: {phone.quantity_in_stock}</p>
                  <div style={{
                      display:'flex',
                      gap:'50px',
                      flexWrap: 'wrap'
                  }}>
                    <button
                        onClick={() => onAddToBag && onAddToBag(phone.id,isloginedin) }
                        style={{padding:'20px',backgroundColor:'black',color:'white',border:'none',borderRadius:'5px',cursor:'pointer',fontWeight:'bold'}}
                    >
                      Add to Bag
                    </button>
                    <button style={{padding:'20px',backgroundColor:'black',color:'white',border:'none',borderRadius:'5px',cursor:'pointer',fontWeight:'bold'}}>Buy Now</button>
                  </div>
                </div>
               </div>
            ))}
        </div>
    )
}
export default IndividualProduct;