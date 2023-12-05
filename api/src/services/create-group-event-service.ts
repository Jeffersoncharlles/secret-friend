import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface ICreateGroupEvent {
  idEvent: string
  title:string
}

class CreateGroupEventService {
  async execute({ idEvent,title }: ICreateGroupEvent) {
    try {
      const groups = await prismaClient.eventGroup.create({
        data: {
          idEvent,
          title,
       }
      })

      return { groups }
    } catch (error) {
      throw new AppError('invalid')
    }
  }
}

export { CreateGroupEventService }
