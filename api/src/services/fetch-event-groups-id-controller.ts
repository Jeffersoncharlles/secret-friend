import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface IFetchEventGroupId {
  idEvent?: string
  id: string
}

class FetchEventGroupIdService {
  async execute({ idEvent, id }: IFetchEventGroupId) {
    console.log(idEvent)
    try {
      const group = await prismaClient.eventGroup.findFirstOrThrow({
        where: {
          idEvent,
          id,
        },
      })

      return { group }
    } catch (error) {
      throw new AppError('Groups not exists')
    }
  }
}

export { FetchEventGroupIdService }
