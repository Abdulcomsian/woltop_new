// pages/products/[id].js
import { useRouter } from 'next/router';

const productDetail = ({ product }) => {
  const router = useRouter();

  // If the page is still loading (before the product data is fetched)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Example: Get a list of product IDs (replace with actual API or data fetching)
  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  // Generate the paths for each product detail page
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: true, // You can also set it to 'blocking' or 'false'
  };
}

export async function getStaticProps({ params }) {
  // Fetch the product details from your API based on the product ID
  const product = {
    id: params.id,
    name: `Product ${params.id}`,
    description: `Description for Product ${params.id}`,
    price: Math.floor(Math.random() * 100) + 1,
  };

  return {
    props: {
      product,
    },
  };
}

export default productDetail;
