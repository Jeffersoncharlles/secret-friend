import { prismaClient } from '@/database/prisma'

interface ICreateEvent {
  title: string
  description: string
  grouped?: boolean
}

class CreateEventService {
  async execute({ title, description, grouped }: ICreateEvent) {
    const data = await prismaClient.event.create({
      data: {
        title,
        description,
        grouped,
      },
    })

    if (!data) {
      return {
        event: {},
      }
    }

    return { data }
  }
}

export { CreateEventService }
