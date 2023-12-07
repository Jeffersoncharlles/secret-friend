import { DeletePeopleEventGroupService } from "@/services/delete-people-event-group-service";
import { Request, Response } from "express";
import { z } from "zod";

class DeletePeopleEventGroupController {
  async handle(req: Request, res: Response) {
    const service = new DeletePeopleEventGroupService();
    const id = z.string().uuid().parse(req.body.id);
    const idEvent = z.string().uuid().parse(req.params.id_events);
    const idGroup = z.string().uuid().parse(req.params.id_groups);

    const result = await service.execute({ id, idEvent, idGroup });
    return res.json(result);
  }
}

export { DeletePeopleEventGroupController };
