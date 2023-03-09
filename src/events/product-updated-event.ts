import { Subjects } from './subjects';

export interface ProductUpdated {
    subject: Subjects.ProductUpdated;
    data: {
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
        orderId?: string;
    }
}