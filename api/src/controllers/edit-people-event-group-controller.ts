import { EditPeopleEventGroupService } from "@/services/edit-people-event-group-service";
import { Request, Response } from "express";
import { z } from "zod";

class EditPeopleEventGroupController {
  async handle(req: Request, res: Response) {
    const service = new EditPeopleEventGroupService();
    const editPeopleSchema = z.object({
      id: z.string().uuid(),
      name: z.string().optional(),
      cpf: z
        .string()
        .transform((val) => val.replace(/\.|-/gm, ""))
        .optional(),
      matched: z.string().optional(),
    });
    const { name, cpf, id, matched } = editPeopleSchema.parse(req.body);

    const idEvent = z.string().uuid().parse(req.params.id_events);
    const idGroup = z.string().uuid().parse(req.params.id_groups);

    const result = await service.execute({
      name,
      idEvent,
      idGroup,
      cpf,
      id,
      matched,
    });
    return res.json(result);
  }
}

export { EditPeopleEventGroupController };
