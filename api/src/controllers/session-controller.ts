import { SessionService } from "@/services/session-services";
import { Request, Response } from "express";
import { z } from "zod";

class SessionController {
  async handle(req: Request, res: Response) {
    const service = new SessionService();
    const sessionSchema = z.object({
      password: z.string(),
    });
    const { password } = sessionSchema.parse(req.body);

    const result = await service.execute({ password });
    return res.json(result);
  }
}

export { SessionController };
