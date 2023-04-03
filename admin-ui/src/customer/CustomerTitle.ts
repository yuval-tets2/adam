import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "id";

export const CustomerTitle = (record: TCustomer): string => {
  return record.id || String(record.id);
};
