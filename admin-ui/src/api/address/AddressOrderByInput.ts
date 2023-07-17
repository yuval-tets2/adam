import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address_1?: SortOrder;
  address_2?: SortOrder;
  city?: SortOrder;
  state?: SortOrder;
  zip?: SortOrder;
};
