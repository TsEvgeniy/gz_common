import { Subjects } from './subjects';

export interface UserOrderCancelledEvent {
  subject: Subjects.UserOrderCancelled;
  data: {
    id: string;
    version: number;
    product: {
      id: string;
    };
  };
}
