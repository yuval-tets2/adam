import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  name?: string | null;
};
