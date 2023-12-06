import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface IFetchPeopleEventGroup {
  idEvent: string
  idGroup?: string
  id?: string
  cpf?: string
}

class FetchPeopleEventGroupService {
  async execute({ idEvent, idGroup, id, cpf }: IFetchPeopleEventGroup) {
    try {
      const person = await prismaClient.eventPeople.findFirstOrThrow({
        where: {
          idEvent,
          idGroup,
        },
      })

      return { person }
    } catch (error) {
      throw new AppError('Groups not exists')
    }
  }
}

export { FetchPeopleEventGroupService }
