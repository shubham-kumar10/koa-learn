import { Cart, Orders, UpdateCartRequest } from "../interfaces/cart.model";
import { queryProduct } from "./products.mock";

const cart: Cart[] = [];
const orders: Orders[] = [];

export function addToCart(cartObject: Cart): Cart[] {
  cartObject.id = cart.length;
  cart.push(cartObject);
  return queryCart(cartObject.userId);
}

export function queryCart(userId: number) {
  const res = cart.filter(item => {
    if (item.userId == userId) {
      console.log(item);
      return item;
    }
  });
  return res;
}

export function updateCart(cartRequest: UpdateCartRequest) {
  let updated: boolean = false;
  let userId: number = NaN;
  cart.forEach(item => {
    console.log(item.id, cartRequest.cartId);
    if (item.id == cartRequest.cartId) {
      console.log(item);
      item.quantity = cartRequest.quantity;
      updated = true;
      userId = item.userId;
    }
  });
  console.log(userId);
  if (userId) {
    return queryCart(userId);
  } else {
    throw new Error("Cart doesnt exist");
  }
}

export function checkout(orderObj: Orders) {
  let total: number;
  orderObj.cartItem.forEach(item => {
    const product = queryProduct(item.productId);
    cart.splice(cart.findIndex(cartItem => cartItem == item));
  });
  orders.push(orderObj);
}
