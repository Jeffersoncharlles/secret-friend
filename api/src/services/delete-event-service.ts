import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface IDeleteEvent {
  id: string
}

class DeleteEventService {
  async execute({ id }: IDeleteEvent) {
    try {
      await prismaClient.event.delete({
        where: {
          id,
        },
      })
    } catch (error) {
      throw new AppError('invalid')
    }
  }
}

export { DeleteEventService }
