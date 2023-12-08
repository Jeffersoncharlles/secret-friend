import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";
import { EncryptMatch } from "@/util/encrypt-match";
import { sortedPeopleList } from "@/util/sorted-people-list";
import { PrismaClient } from "@prisma/client";

interface IEditEvent {
  id: string;
  status?: boolean;
  title?: string;
  description?: string;
  grouped?: boolean;
}

type sortedList = {
  id: string;
  match: number;
};

/**
 *  Grupo A
 *  - Jefferson
 *  - Pedro
 *  - Carlinha
 *
 * Grupo B
 *  - Jeneffer
 *  - Maria
 *
 * Grupo C
 *  - Fabrício
 */

class EditEventService {
  async execute({ title, description, grouped, id, status }: IEditEvent) {
    const event = await prismaClient.event.update({
      where: {
        id,
      },
      data: {
        status,
        title,
        description,
        grouped,
      },
    });

    if (!event) {
      throw new AppError("Event Not exists!");
    }

    if (event.status) {
      // done: Fazer o sorteio
      const eventItem = await prismaClient.event.findFirst({ where: { id }, select: { grouped: true } });

      if (!eventItem) {
        throw new AppError("Event not exists!");
      }

      const peopleList = await prismaClient.eventPeople.findMany({
        where: {
          idEvent: id,
        },
      });
      if (!peopleList) {
        throw new AppError("People not exists!");
      }

      // fazer sorteio
      const sortableList = sortedPeopleList(peopleList, eventItem);

      if (!sortableList) {
        throw new AppError("Groups impossible to sort");
      }

      for (const i in sortableList) {
        await prismaClient.eventPeople.updateMany({
          where: {
            id: sortableList[i].id,
            idEvent: id,
          },
          data: {
            matched: EncryptMatch.encryptMatch(sortableList[i].match),
          },
        });
      }
    } else {
      // done : Limpar o sorteio
      await prismaClient.eventPeople.updateMany({
        where: {
          idEvent: id,
        },
        data: {
          matched: "",
        },
      });
    }

    return { event };
  }
}

export { EditEventService };
