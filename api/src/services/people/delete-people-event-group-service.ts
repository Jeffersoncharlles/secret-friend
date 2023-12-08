import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";

interface IDeletePeopleEventGroup {
  id: string;
  idEvent: string;
  idGroup: string;
}

class DeletePeopleEventGroupService {
  async execute({ id, idEvent, idGroup }: IDeletePeopleEventGroup) {
    try {
      await prismaClient.eventPeople.delete({
        where: {
          id,
          idEvent,
          idGroup,
        },
      });
    } catch (error) {
      throw new AppError("Invalid");
    }
  }
}

export { DeletePeopleEventGroupService };
