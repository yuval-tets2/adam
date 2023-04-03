import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "firstName";

export const OrderTitle = (record: TOrder): string => {
  return record.firstName || String(record.id);
};
