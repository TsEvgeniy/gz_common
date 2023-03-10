import { Subjects } from "./subjects";
import { OrderStatus } from './types/order-status';

export interface UserOrderCreatedEvent {
    subject: Subjects.UserOrderCreated;
    data: {
        id: string;
        version: number;
        status: OrderStatus;
        userId: string;
        expiresAt: string;
        product: {
            id: string;
            price: number;
        };
    };
}