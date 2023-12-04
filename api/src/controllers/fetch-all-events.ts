import { FetchAllEventsService } from '@/services/fetch-all-events-service'
import { Request, Response } from 'express'
import { z } from 'zod'

class FetchAllEventsController {
  async handle(req: Request, res: Response) {
    const service = new FetchAllEventsService()

    const result = await service.execute()
    return res.json(result)
  }
}

export { FetchAllEventsController }
