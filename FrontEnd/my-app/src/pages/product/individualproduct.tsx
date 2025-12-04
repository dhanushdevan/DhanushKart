import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './individualproduct.css';

type IndividualProductProps = {
  id?: number;
  onAddToBag?: (productId: number, isloginedin: boolean) => void;
};

function IndividualProduct({ id: propId, onAddToBag }: IndividualProductProps) {
  const params = useParams();
  const id = propId ?? (params.id ? Number(params.id) : undefined);
  console.log('IndividualProduct - params:', params);
  console.log('IndividualProduct - propId:', propId);
  console.log('IndividualProduct - parsed id:', id);
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isloginedin] = useState(false);

  useEffect(() => {
    if (!id) {
      setError('No product id provided');
      setLoading(false);
      return;
    }

    (async () => {
      try {
        setLoading(true);
        console.log(`Fetching product with id: ${id}`);
        
        // Try to fetch single product endpoint first
        const singleRes = await fetch(`http://localhost:9090/product/getproduct/${id}`, { mode: 'cors' });
        console.log(`Single product fetch status: ${singleRes.status}`);
        
        if (singleRes.ok) {
          const singleData = await singleRes.json();
          console.log('Single product response:', singleData);
          // If API returns responseData or product object, normalize
          const p = singleData.responseData ?? singleData;
          setProduct(p);
          setError('');
        } else {
          console.log('Single product endpoint failed, fetching all products...');
          // Fallback: fetch all and filter
          const allRes = await fetch('http://localhost:9090/product/getallproduct', { mode: 'cors' });
          if (!allRes.ok) throw new Error(`HTTP ${allRes.status}`);
          const allData = await allRes.json();
          console.log('All products response:', allData);
          const list = allData.responseData || [];
          console.log(`Total products: ${list.length}`);
          
          // Try to match by productId first, then id
          const found = list.find((x: any) => {
            const xId = x.productId !== undefined ? Number(x.productId) : (x.id !== undefined ? Number(x.id) : null);
            const matches = xId === id;
            console.log(`Checking product: productId=${x.productId}, id=${x.id}, converted=${xId}, matches=${matches}, searchId=${id}`);
            return matches;
          });
          
          console.log('Found product:', found);
          if (found) {
            setProduct(found);
            setError('');
          } else {
            setProduct(null);
            setError(`Product with id ${id} not found in database.`);
          }
        }
      } catch (e) {
        console.error('Fetch error:', e);
        setError(`Failed to load product: ${(e as Error).message}`);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p style={{ padding: 20, textAlign: 'center' }}>Loading product...</p>;
  if (error) return <p style={{ padding: 20, textAlign: 'center', color: 'red' }}>{error}</p>;
  if (!product) return <p style={{ padding: 20, textAlign: 'center' }}>Product not found.</p>;

  const pid = product.productId ?? product.id;
  const name = product.productName ?? product.name;
  const description = product.description ?? product.desc;
  const price = product.price ?? product.cost ?? 0;
  const qty = product.stockQuantity ?? product.quantity_in_stock ?? product.quantity ?? product.stock ?? 0;
  const image = (product.imageUrl ?? product.image_url ?? product.image) || '';

  return (
    <div className="product-image">
      <div>
        <img src={image || 'placeholder.jpg'} alt={name} />
      </div>
      <div className="product-details" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column' }}>
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>Price: ₹{Number(price).toLocaleString()}</h2>
        <p>Quantity in Stock: {qty}</p>
        <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
          <button
            onClick={() => onAddToBag && onAddToBag(pid, isloginedin)}
            style={{ padding: '20px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Add to Bag
          </button>
          <button style={{ padding: '20px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default IndividualProduct;