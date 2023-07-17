import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  itemPrice?: number | null;
  description?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
