import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface IFetchPeopleEventGroup {
  idEvent?: string
  idGroups: string
}

class FetchPeopleEventGroupService {
  async execute({ idEvent, idGroups }: IFetchPeopleEventGroup) {
    try {
      const group = await prismaClient.eventGroup.findFirstOrThrow({
        where: {
          idEvent,
          id: idGroups,
        },
      })

      return { group }
    } catch (error) {
      throw new AppError('Groups not exists')
    }
  }
}

export { FetchPeopleEventGroupService }
