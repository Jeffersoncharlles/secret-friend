import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";

interface ICreateGroupEvent {
  idEvent: string;
  title: string;
}

class CreateGroupEventService {
  async execute({ idEvent, title }: ICreateGroupEvent) {
    if (title.length < 3) {
      throw new AppError("Title min 3 characters!");
    }

    try {
      const event = await prismaClient.event.findFirst({
        where: {
          id: idEvent,
        },
      });

      if (!event) {
        throw new AppError("Event already exists!");
      }

      const group = await prismaClient.eventGroup.create({
        data: {
          idEvent,
          title,
        },
      });
      if (!group) {
        throw new AppError("Invalid");
      }
      return { group };
    } catch (error) {
      throw new AppError("invalid");
    }
  }
}

export { CreateGroupEventService };
