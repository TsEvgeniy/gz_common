import { Subjects } from './subjects';

export interface ProductRemoveFromWishlistEvent {
    subject: Subjects.ProductRemoveFromWishlist;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string
    };
}