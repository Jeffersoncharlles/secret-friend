import { prismaClient } from "@/database/prisma";
import { AppError } from "@/routes/errors/appError";
import { EncryptMatch } from "@/util/encrypt-match";

interface ISearchPeopleCPF {
  idEvent: string;
  cpf: string;
}

class SearchPeopleCPFService {
  async execute({ idEvent, cpf }: ISearchPeopleCPF) {
    if (!idEvent && !cpf) {
      throw new AppError("People not exists");
    }

    const personOnMatch = await prismaClient.eventPeople.findFirstOrThrow({
      where: {
        idEvent,
        cpf,
      },
    });

    if (personOnMatch && personOnMatch.matched) {
      const matchId = EncryptMatch.decryptMatch(personOnMatch.matched);
      const personMatched = await prismaClient.eventPeople.findFirst({
        where: {
          idEvent,
          id: matchId,
        },
      });

      if (personMatched) {
        return {
          person: {
            id: personOnMatch.id,
            name: personOnMatch.name,
          },
          personMatched: {
            id: personMatched.id,
            name: personMatched.name,
          },
        };
      }
    } else {
      throw new AppError("not match");
    }
  }
}

export { SearchPeopleCPFService };
