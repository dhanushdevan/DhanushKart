import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './productlandingpage.css';

function ProductLandingPage() {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("http://localhost:9090/product/getallproduct")
      .then(res => res.json())
      .then(data => {
        setProducts(data.responseData || []);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.productId} className="product-card">
          <img src={product.image_url} alt={product.productName} />

          <h2>{product.productName}</h2>
          <p>{product.description}</p>

          <p className="price">₹{product.price}</p>

          <button onClick={() => navigate(`/product/${product.productId}`)}>
            Shop Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductLandingPage;
