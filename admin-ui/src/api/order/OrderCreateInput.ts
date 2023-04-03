import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  aaa?: string | null;
  bbb?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
