import { client } from "@/sanity/lib/client";

export default async function syncMockApiToSanity() {
  const response = await fetch('https://677d02dd4496848554c89cf6.mockapi.io/Products');
  const products = await response.json();

  console.log(products);

  // Save each product to Sanity
  for (const product of products) {
    await client.createOrReplace({
      _id: `${product.id}`, // Unique ID for each product
      _type: 'product',
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      dimensions: {
        length: product.dimensions?.length || 0,
        height: product.dimensions?.height || 0,
        width: product.dimensions?.width || 0,
        weight: product.dimensions?.weight || 0,
        unit: product.dimensions?.unit || 'cm',
        distanceUnit: product.dimensions?.distanceUnit || 'cm',
      },
      material: product.material,
      color: product.color,
      stock: product.stock,
      image: product.image ? { asset: { _ref: product.image } } : null, // Handle image
      rating: product.rating,
      reviews: product.reviews?.map((review: any) => ({
        userId: review.userId,
        comment: review.comment,
        rating: review.rating,
      })),
      createdAt: product.createdAt || new Date().toISOString(),
      updatedAt: product.updatedAt || new Date().toISOString(),
    });
  }

  console.log('Products synced to Sanity!',products);
}