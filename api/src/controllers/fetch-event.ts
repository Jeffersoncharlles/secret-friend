import { FetchEventService } from "@/services/fetch-event-service";
import { Request, Response } from "express";
import { z } from "zod";

class FetchEventController {
  async handle(req: Request, res: Response) {
    const service = new FetchEventService();
    const id = z.string().parse(req.params.id);

    // const id = z.string().parse(params)

    const result = await service.execute({ id });
    return res.json(result);
  }
}

export { FetchEventController };
