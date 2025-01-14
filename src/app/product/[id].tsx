// pages/products/[id].js
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL

  return (
        <div>
        <h1>Product Details</h1>
        <p>Details for Product ID: {id}</p>
        </div>
  );
};

export default ProductDetail;