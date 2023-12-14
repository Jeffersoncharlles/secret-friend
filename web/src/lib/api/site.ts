import { Event } from "@/@types/event";
import { api } from "./axios";


export const FetchEvent = async (id:string): Promise<Event | false> => {
  const event = await api.get(`/events/${id}`)

  if (event.data.data) {
    return event.data as  Event
  }
  return false
}