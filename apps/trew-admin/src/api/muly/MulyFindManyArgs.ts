import { MulyWhereInput } from "./MulyWhereInput";
import { MulyOrderByInput } from "./MulyOrderByInput";

export type MulyFindManyArgs = {
  where?: MulyWhereInput;
  orderBy?: Array<MulyOrderByInput>;
  skip?: number;
  take?: number;
};
