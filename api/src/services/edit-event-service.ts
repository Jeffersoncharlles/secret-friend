import { prismaClient } from '@/database/prisma'

interface IEditEvent {
  id: string
  title: string
  description: string
  grouped?: boolean
}

class EditEventService {
  async execute({ title, description, grouped, id }: IEditEvent) {
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

export { EditEventService }
