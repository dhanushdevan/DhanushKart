import Header from "../../component/header/header";
import ProductLandingPage from "../product/productlandingpage";
import Landingpagebody from "./landingpagebody";
import React, { useState } from "react";
function Landingpage(){
  const [lastAddedToBagProductId, setLastAddedToBagProductId] = useState<number | null>(null);

  const handleAddToBag = (productId: number) => {
    // parent receives notification from child component
    setLastAddedToBagProductId(productId);
    // you can also update global cart state here or call an API
    console.log('Parent received AddToBag for product', productId);
  };
    return(
        
        <div>
            <Landingpagebody />

        </div>
    );
}
export default Landingpage;