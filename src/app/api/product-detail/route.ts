// app/api/get-product-by-id/route.ts
import { NextResponse } from 'next/server';

// Simulate fetching product by ID
const getProductById = async (id: string) => {
  const products = {
    1: { id: '1', name: 'Product 1', price: 100, description: 'This is product 1' },
    2: { id: '2', name: 'Product 2', price: 200, description: 'This is product 2' },
  };
  return products[id] || null;
};

export async function GET({ params }: { params: { productId: string } }) {
  const { productId } = params;

  try {
    const product = await getProductById(productId);
    if (!product) {
      return NextResponse.json({ error: `Product with ID ${productId} not found` }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch product by ID' }, { status: 500 });
  }
}
