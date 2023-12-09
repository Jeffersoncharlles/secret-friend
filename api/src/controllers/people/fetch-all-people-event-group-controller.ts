import { FetchAllPeopleEventGroupService } from "@/services/people/fetch-all-people-event-group-service";
import { Request, Response } from "express";
import { z } from "zod";

class FetchAllPeopleEventGroupController {
  async handle(req: Request, res: Response) {
    const service = new FetchAllPeopleEventGroupService();
    const idEvent = z.string().uuid().parse(req.params.id_events);

    const idGroup = z.string().uuid().parse(req.params.id_groups);
    const result = await service.execute({ idEvent, idGroup });
    return res.json(result);
  }
}

export { FetchAllPeopleEventGroupController };
