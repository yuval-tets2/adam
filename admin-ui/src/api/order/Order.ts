import { Customer } from "../customer/Customer";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  aaa: string | null;
  bbb: string | null;
  customer?: Customer | null;
};
