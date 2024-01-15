export type Event = {
  data: eventRoot
}

type eventRoot = {
  id: string
  status: boolean
  title: string
  description: string
  grouped: boolean
  createdAt: string
  updatedAt: string
}

export type Events = {
  events: {
    id: string
    status: boolean
    title: string
    description: string
    grouped: boolean
    createdAt: string
    updatedAt: string
  }[]
}