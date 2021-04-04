interface Product {
  id: number;
  name: string;
  imageUrls?: string[];
  price: number;
}

const products: Product[] = [
  { id: 0, name: "Pepsi", price: 10 },
  { id: 1, name: "Coke", price: 5 },
  { id: 2, name: "Lassi", price: 20 },
  { id: 3, name: "Sandwich", price: 10 },
  { id: 4, name: "Naan", price: 30 },
  { id: 5, name: "Veg Curry", price: 30 }
];

export function queryAllProducts(): Product[] {
  return products;
}

export function queryProduct(productId: number): Product | undefined {
  return products.find(item => item.id === productId);
}
