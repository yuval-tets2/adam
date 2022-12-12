import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  name?: string | null;
};
