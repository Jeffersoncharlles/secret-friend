import { prismaClient } from '@/database/prisma'

interface IFetchEvent {
  id: string
}

class FetchEventService {
  async execute({ id }: IFetchEvent) {
    const data = await prismaClient.event.findFirst({
      where: {
        id,
      },
    })

    if (data === null) {
      return {
        event: {},
      }
    }

    return { data }
  }
}

export { FetchEventService }
