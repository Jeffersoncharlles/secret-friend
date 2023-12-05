import { DeleteEventService } from '@/services/delete-event-service'
import { Request, Response } from 'express'
import { z } from 'zod'

class DeleteEventController {
  async handle(req: Request, res: Response) {
    const service = new DeleteEventService()
    const id = z.string().uuid().parse(req.body.id)

    // const id = z.string().parse(params)

    const result = await service.execute({ id })
    return res.json(result)
  }
}

export { DeleteEventController }
