import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  discount?: SortOrder;
  totalPrice?: SortOrder;
  customerId?: SortOrder;
  productId?: SortOrder;
};
