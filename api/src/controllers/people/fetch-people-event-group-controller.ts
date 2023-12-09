import { FetchPeopleEventGroupService } from "@/services/people/fetch-people-event-group-service";
import { Request, Response } from "express";
import { z } from "zod";

class FetchPeopleEventGroupController {
  async handle(req: Request, res: Response) {
    const service = new FetchPeopleEventGroupService();
    const idEvent = z.string().uuid().parse(req.params.id_events);
    const id = z.string().uuid().parse(req.params.id);
    const idGroup = z.string().uuid().parse(req.params.id_groups);
    const result = await service.execute({ idEvent, idGroup, id });
    return res.json(result);
  }
}

export { FetchPeopleEventGroupController };
