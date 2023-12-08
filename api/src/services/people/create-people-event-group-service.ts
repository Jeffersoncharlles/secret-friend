import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";

interface ICreatePeopleEventGroup {
  name: string;
  idEvent: string;
  idGroup: string;
  cpf: string;
}

class CreatePeopleEventGroupService {
  async execute({ name, idEvent, idGroup, cpf }: ICreatePeopleEventGroup) {
    if (!name && !idEvent && !idGroup && !cpf) {
      throw new AppError("Data Invalid!");
    }

    const group = await prismaClient.eventGroup.findFirst({
      where: {
        idEvent,
        id: idGroup,
      },
    });

    if (!group) {
      throw new AppError("Group Invalid", 401);
    }

    const person = await prismaClient.eventPeople.create({
      data: {
        name,
        idEvent,
        idGroup,
        cpf,
      },
    });

    return { person };
  }
}

export { CreatePeopleEventGroupService };
