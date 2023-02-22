import { Subjects } from "./subjects";

export interface ProductAddToCartEvent {
  subject: Subjects.ProductAddToCart;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}