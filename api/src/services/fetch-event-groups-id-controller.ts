import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface IFetchEventGroupId {
  idEvent?: string
  id: string
}

class FetchEventGroupIdService {
  async execute({ idEvent, id }: IFetchEventGroupId) {
    try {
      const persons = await prismaClient.eventPeople.findMany({
        where: {
          idEvent,
          id,
        },
      })

      return { persons }
    } catch (error) {
      throw new AppError('Persons not exists')
    }
  }
}

export { FetchEventGroupIdService }
