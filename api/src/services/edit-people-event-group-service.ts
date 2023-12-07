import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";

interface IEditPeopleEventGroup {
  name?: string;
  idEvent: string;
  idGroup: string;
  cpf?: string;
  id: string;
  matched?: string;
}

class EditPeopleEventGroupService {
  async execute({ name, idEvent, idGroup, cpf, id, matched }: IEditPeopleEventGroup) {
    if (!id && !idEvent) {
      throw new AppError("Data Invalid!");
    }

    const person = await prismaClient.eventPeople.update({
      where: {
        id,
        idEvent,
        idGroup,
      },
      data: {
        cpf,
        name,
        idGroup,
      },
    });

    return { person };
  }
}

export { EditPeopleEventGroupService };
