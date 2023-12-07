import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";
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
      // TODO: Fazer o sorteio
      // const result = await prismaClient.eventPeople.updateMany({
      //   where: {
      //     idEvent: id,
      //   },
      //   data: {},
      // });
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

      let sortedList: sortedList[] = [];
      let sortable: string[] = [];

      let attempts = 0;
      const maxAttempts = peopleList.length;
      let keepTrying = true;

      while (keepTrying && attempts < maxAttempts) {
        keepTrying = false;
        attempts++;
        sortedList = [];

        sortable = peopleList.map((people) => people.id);

        for (const i in peopleList) {
          let sortableFiltered: string[] = sortable;
          if (eventItem.grouped) {
            sortableFiltered = sortable.filter((sortableId) => {
              const sortablePerson = peopleList.find((person) => person.id === sortableId);
              return peopleList[i].idGroup !== sortablePerson?.idGroup; // tem que ser diferente
            });
          }

          if (sortableFiltered.length === 0 || (sortableFiltered.length === 1 && peopleList[i].id === sortableFiltered[0])) {
            // ou seja se nao tem mais ninguém ou e eu msm
            keepTrying = true;
            // faz o proximo
          } else {
            // aqui realmente faz o sorteio
          }
        }
      }

      // if (attempts < maxAttempts) {
      //   for (const i in sortedList) {
      //     await prismaClient.eventPeople.update({
      //       where: {
      //         id: sortedList[i].id,
      //         idEvent: id,
      //       },
      //       data: {
      //         matched: "", // TODO: Criar encryptMatch()
      //       },
      //     });
      //   }
      // }

      // const result = sortedPeopleList(peopleList);

      // if (!result) {
      //   throw new AppError("Groups impossible to sort");
      // }
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
