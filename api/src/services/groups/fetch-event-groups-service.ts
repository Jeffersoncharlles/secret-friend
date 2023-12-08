import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";

interface IFetchEventGroup {
  id_event: string;
}

class FetchEventGroupService {
  async execute({ id_event }: IFetchEventGroup) {
    try {
      const groups = await prismaClient.eventGroup.findMany({
        where: {
          idEvent: id_event,
        },
      });

      return { groups };
    } catch (error) {
      throw new AppError("Groups not exists");
    }
  }
}

export { FetchEventGroupService };
