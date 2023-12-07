import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";

interface IFetchEventGroupId {
  idEvent?: string;
  id: string;
}

class FetchEventGroupIdService {
  async execute({ idEvent, id }: IFetchEventGroupId) {
    try {
      const group = await prismaClient.eventGroup.findFirstOrThrow({
        where: {
          idEvent,
          id,
        },
      });

      return { group };
    } catch (error) {
      throw new AppError("group not exists");
    }
  }
}

export { FetchEventGroupIdService };
