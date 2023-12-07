import { FetchEventGroupIdService } from "@/services/fetch-event-groups-id-controller";
import { Request, Response } from "express";
import { z } from "zod";

class FetchEventGroupIdController {
  async handle(req: Request, res: Response) {
    const service = new FetchEventGroupIdService();
    const idEvent = z.string().uuid().parse(req.params.id_events);
    const id = z.string().uuid().parse(req.params.id);
    const result = await service.execute({ idEvent, id });
    return res.json(result);
  }
}

export { FetchEventGroupIdController };
