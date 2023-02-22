import { Subjects } from "./subjects";

export interface ProductAddToWishlistEvent {
    subject: Subjects.ProductAddToWishlist;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    };
}