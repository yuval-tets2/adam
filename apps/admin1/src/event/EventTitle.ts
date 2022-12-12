import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "name";

export const EventTitle = (record: TEvent): string => {
  return record.name || record.id;
};
