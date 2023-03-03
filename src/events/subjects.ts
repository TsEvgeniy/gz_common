export enum Subjects {
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',
  OrderCreated = 'order:created',
  OrderCancelled = 'order:cancelled',
  ExpirationComplete = 'expiration:complete',
  PaymentCreated = 'payment:created',

  ProductAddToWishlist = 'product_add_to_wishlist',
  ProductRemoveFromWishlist = 'product_remove_from_wishlist',
  ProductAddToCart = 'product_add_to_cart',
  ProductRemoveFromCart = 'product_remove_from_cart',

  ProductCreated = 'product_created',
}
