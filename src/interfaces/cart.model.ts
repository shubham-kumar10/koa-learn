export interface Cart {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
}

export interface Orders {
  id: number;
  cartItem: Cart[];
  checkoutDate: Date;
  deliveryAddress: string;
  isDelivered: boolean;
  totalPrice?: number;
}

export interface UpdateCartRequest {
  cartId: number;
  quantity: number;
}
