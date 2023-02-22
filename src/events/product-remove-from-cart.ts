import { Subjects } from "./subjects";

export interface ProductRemoveFromCartEvent {
  subject: Subjects.ProductRemoveFromCart;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}