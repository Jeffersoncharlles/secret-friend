import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface IFetchPeopleEventGroup {
  idEvent: string
  idGroup?: string
}

class FetchAllPeopleEventGroupService {
  async execute({ idEvent, idGroup }: IFetchPeopleEventGroup) {
    try {
      const persons = await prismaClient.eventPeople.findMany({
        where: {
          idEvent,
          idGroup,
        },
        include: {
          event: {
            select: {
              title: true,
              status: true,
              description: true,
            },
          },
        },
      })

      return { persons }
    } catch (error) {
      throw new AppError('Invalid')
    }
  }
}

export { FetchAllPeopleEventGroupService }
