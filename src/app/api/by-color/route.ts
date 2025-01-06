// app/api/products-by-color/route.ts
import { NextResponse } from 'next/server';

// Simulate fetching products by color
const getProductsByColor = async (colorId: string) => {
  const productsByColor = {
    1: [{ id: 1, name: 'Red Shirt', price: 25, color: 'Red' }],
    2: [{ id: 2, name: 'Blue Jeans', price: 40, color: 'Blue' }],
    3: [{ id: 3, name: 'Green Jacket', price: 50, color: 'Green' }],
  };
  return productsByColor[colorId] || [];
};

export async function GET({ params }: { params: { colorId: string } }) {
  const { colorId } = params;

  try {
    const products = await getProductsByColor(colorId);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: `Failed to fetch products for color ID: ${colorId}` }, { status: 500 });
  }
}
