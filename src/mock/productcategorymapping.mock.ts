import { queryProduct } from "./products.mock";

interface ProductCategoryMapping {
  id: number;
  productId: number;
  categoryId: number;
}
const product_category: ProductCategoryMapping[] = [
  { id: 0, productId: 0, categoryId: 1 },
  { id: 1, productId: 0, categoryId: 0 },
  { id: 2, productId: 1, categoryId: 1 },
  { id: 3, productId: 1, categoryId: 0 },
  { id: 4, productId: 2, categoryId: 1 },
  { id: 5, productId: 2, categoryId: 0 },
  { id: 6, productId: 3, categoryId: 1 },
  { id: 7, productId: 4, categoryId: 2 },
  { id: 7, productId: 5, categoryId: 3 },
  { id: 7, productId: 5, categoryId: 2 }
];

export function queryAllProductCategory() {
  return product_category;
}

export function queryAllCategoryWithProductId(productId: number) {
  const res: ProductCategoryMapping[] = product_category.filter(
    item => item.productId === productId
  );
  return res;
}

export function queryAllProductsofACategory(categorytId: number) {
  const res: ProductCategoryMapping[] = product_category.filter(item => {
    if (item.categoryId == categorytId) {
      console.log(item);
      return item;
    }
  });
  const result = res.map(item => {
    return queryProduct(item.productId);
  });
  return result;
}

export function addProductCategoryMapping(item: ProductCategoryMapping) {
  product_category.push(item);
}
