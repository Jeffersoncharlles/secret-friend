import { DeleteGroupEventService } from '@/services/delete-group-event-service'
import { Request, Response } from 'express'
import { z } from 'zod'

class DeleteGroupEventController {
  async handle(req: Request, res: Response) {
    const service = new DeleteGroupEventService()

    const id = z.string().uuid().parse(req.body.id)
    const idEvent = z.string().parse(req.params.id_events)

    const result = await service.execute({ id, idEvent })
    return res.json(result)
  }
}

export { DeleteGroupEventController }
