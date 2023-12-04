import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface IEditEvent {
  id: string
  status?: boolean
  title?: string
  description?: string
  grouped?: boolean
}

class EditEventService {
  async execute({ title, description, grouped, id, status }: IEditEvent) {
    try {
      const data = await prismaClient.event.update({
        where: {
          id,
        },
        data: {
          status,
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
    } catch (error) {
      throw new AppError('Event already exists!')
    }
  }
}

export { EditEventService }
