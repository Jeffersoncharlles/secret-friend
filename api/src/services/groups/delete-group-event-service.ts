import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";

interface IDeleteGroupEvent {
  id: string;
  idEvent?: string;
}

class DeleteGroupEventService {
  async execute({ id, idEvent }: IDeleteGroupEvent) {
    try {
      await prismaClient.eventGroup.delete({
        where: {
          id,
          idEvent,
        },
      });
    } catch (error) {
      throw new AppError("invalid");
    }
  }
}

export { DeleteGroupEventService };
