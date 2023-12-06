import { prismaClient } from '@/database/prisma'
import { AppError } from '@/routes/errors/appError'

interface IEditPeopleEventGroup {
  name?: string
  idEvent: string
  idGroup: string
  cpf?: string
  id: string
}

class EditPeopleEventGroupService {
  async execute({ name, idEvent, idGroup, cpf, id }: IEditPeopleEventGroup) {
    if (!name && !idEvent && !idGroup && !cpf) {
      throw new AppError('Data Invalid!')
    }

    const group = await prismaClient.eventGroup.findFirst({
      where: {
        idEvent,
        id: idGroup,
      },
    })

    if (!group) {
      throw new AppError('Group Invalid', 401)
    }

    const person = await prismaClient.eventPeople.update({
      where: {
        id,
      },
      data: {
        cpf,
        name,
        idGroup,
      },
    })

    return { person }
  }
}

export { EditPeopleEventGroupService }
