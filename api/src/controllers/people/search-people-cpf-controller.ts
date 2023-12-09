import { SearchPeopleCPFService } from "@/services/people/search-people-cpf-service";
import { Request, Response } from "express";
import { z } from "zod";

class SearchPeopleCPFController {
  async handle(req: Request, res: Response) {
    const service = new SearchPeopleCPFService();
    const idEvent = z.string().uuid().parse(req.params.id_events);
    const cpf = z
      .string()
      .transform((val) => val.replace(/\.|-/gm, ""))
      .parse(req.query.cpf);

    const result = await service.execute({ idEvent, cpf });
    return res.json(result);
  }
}

export { SearchPeopleCPFController };
