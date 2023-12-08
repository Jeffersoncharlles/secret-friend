import { CreatePeopleEventGroupService } from "@/services/people/create-people-event-group-service";
import { Request, Response } from "express";
import { z } from "zod";

class CreatePeopleEventGroupController {
  async handle(req: Request, res: Response) {
    const service = new CreatePeopleEventGroupService();
    const createPeopleSchema = z.object({
      name: z.string(),
      cpf: z.string().transform((val) => val.replace(/\.|-/gm, "")),
    });
    const { name, cpf } = createPeopleSchema.parse(req.body);
    const idEvent = z.string().uuid().parse(req.params.id_events);
    const idGroup = z.string().uuid().parse(req.params.id_groups);

    const result = await service.execute({ name, idEvent, idGroup, cpf });
    return res.json(result);
  }
}

export { CreatePeopleEventGroupController };
