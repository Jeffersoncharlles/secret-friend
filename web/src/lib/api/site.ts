import { Event } from "@/@types/event";
import { api } from "./axios";
import { SearchResult } from "@/@types/search-result";


export const FetchEvent = async (id:string): Promise<Event | false> => {
  const event = await api.get(`/events/${id}`)

  if (event.data.data) {
    return event.data as  Event
  }
  return false
}

export const searchCPF =async (eventId:string, cpf:string): Promise<SearchResult | false> => {

  const people = await api.get(`/events/${eventId}/search`, {
    params: {
      cpf
    }
  })

  if (people.data.person && people.data.personMatched) {
    return people.data
  }

  return false
}