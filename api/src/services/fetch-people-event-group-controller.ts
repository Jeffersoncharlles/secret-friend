import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";

interface IFetchPeopleEventGroup {
  idEvent: string;
  idGroup?: string;
  id?: string;
  cpf?: string;
}

class FetchPeopleEventGroupService {
  async execute({ idEvent, idGroup, id, cpf }: IFetchPeopleEventGroup) {
    if (!id && !cpf) {
      throw new AppError("People not exists");
    }
    try {
      const person = await prismaClient.eventPeople.findFirstOrThrow({
        where: {
          idEvent,
          idGroup,
          id,
          cpf,
        },
      });

      return { person };
    } catch (error) {
      throw new AppError("People not exists");
    }
  }
}

export { FetchPeopleEventGroupService };
