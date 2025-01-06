// app/api/products-by-tag/route.ts
import { NextResponse } from 'next/server';

// Simulate fetching products by tag
const getProductsByTag = async (tagId: string) => {
  const productsByTag = {
    1: [{ id: 1, name: 'Summer Shirt', price: 20, tag: 'Summer' }],
    2: [{ id: 2, name: 'Winter Jacket', price: 100, tag: 'Winter' }],
    3: [{ id: 3, name: 'Sports Shoes', price: 60, tag: 'Sports' }],
  };
  return productsByTag[tagId] || [];
};

export async function GET({ params }: { params: { tagId: string } }) {
  const { tagId } = params;

  try {
    const products = await getProductsByTag(tagId);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: `Failed to fetch products for tag ID: ${tagId}` }, { status: 500 });
  }
}
