import { Subjects } from "./subjects";

export interface ProductAddToWishlistEvent {
    subjects: Subjects.ProductAddToWishlist;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    };
}