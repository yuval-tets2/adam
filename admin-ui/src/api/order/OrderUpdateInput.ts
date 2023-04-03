import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  aaa?: string | null;
  bbb?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
