import { Muly as TMuly } from "../api/muly/Muly";

export const MULY_TITLE_FIELD = "id";

export const MulyTitle = (record: TMuly): string => {
  return record.id || String(record.id);
};
