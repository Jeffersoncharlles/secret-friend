import { CreateGroupEventService } from "@/services/groups/create-group-event-service";
import { Request, Response } from "express";
import { z } from "zod";

class CreateGroupEventController {
  async handle(req: Request, res: Response) {
    const service = new CreateGroupEventService();
    const idEvent = z.string().uuid().parse(req.params.id_events);
    const title = z.string().parse(req.body.title);

    const result = await service.execute({ idEvent, title });
    return res.json(result);
  }
}

export { CreateGroupEventController };
