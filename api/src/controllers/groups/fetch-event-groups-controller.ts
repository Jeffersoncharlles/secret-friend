import { FetchEventGroupService } from "@/services/groups/fetch-event-groups-service";
import { Request, Response } from "express";
import { z } from "zod";

class FetchEventGroupController {
  async handle(req: Request, res: Response) {
    const service = new FetchEventGroupService();
    const id_event = z.string().uuid().parse(req.params.id_event);
    const result = await service.execute({ id_event });
    return res.json(result);
  }
}

export { FetchEventGroupController };
