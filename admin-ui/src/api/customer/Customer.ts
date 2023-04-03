import { Order } from "../order/Order";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orders?: Array<Order>;
};
