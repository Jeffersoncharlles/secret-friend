import { prismaClient } from "@/database/prisma";

class FetchAllEventsService {
  async execute() {
    try {
      const data = await prismaClient.event.findMany();

      return { events: data };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { FetchAllEventsService };
