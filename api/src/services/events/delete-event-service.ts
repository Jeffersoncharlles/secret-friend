import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";

interface IDeleteEvent {
  id: string;
}

class DeleteEventService {
  async execute({ id }: IDeleteEvent) {
    console.log(id);
    try {
      await prismaClient.event.delete({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      throw new AppError("invalid");
    }
  }
}

export { DeleteEventService };
