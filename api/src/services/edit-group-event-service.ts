import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface IEditGroupEvent {
  idEvent: string
  id: string
  title?: string
}

class EditGroupEventService {
  async execute({ idEvent, id, title }: IEditGroupEvent) {
    try {
      const group = await prismaClient.eventGroup.update({
        where: {
          id,
          idEvent,
        },
        data: {
          title,
        },
      })

      return {
        group,
      }
    } catch (error) {
      throw new AppError('Invalid')
    }
  }
}

export { EditGroupEventService }
