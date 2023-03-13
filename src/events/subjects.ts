export enum Subjects {
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',
  OrderCreated = 'order:created',
  OrderCancelled = 'order:cancelled',
  ExpirationComplete = 'expiration:complete',
  PaymentCreated = 'payment:created',

  ProductAddToWishlist = 'product:add to wishlist',
  ProductRemoveFromWishlist = 'product:remove from wishlist',
  ProductAddToCart = 'product:add to cart',
  ProductRemoveFromCart = 'product:remove from cart',

  ProductCreated = 'product:created',
  ProductUpdated = 'product:updated',

  UserOrderCreated = 'user_order:created',
  UserOrderCancelled = 'user_order:cancelled',
}
