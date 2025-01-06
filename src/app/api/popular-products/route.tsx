// app/api/popular-products/route.ts
import { NextResponse } from 'next/server';

// Simulating the fetch of popular products
const getPopularProducts = async () => {
  return [
    { id: 1, name: 'Popular Product 1', price: 100, description: 'A popular product' },
    { id: 2, name: 'Popular Product 2', price: 150, description: 'Another popular product' },
  ];
};

export async function GET() {
  try {
    const popularProducts = await getPopularProducts();
    return NextResponse.json(popularProducts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch popular products' }, { status: 500 });
  }
}
