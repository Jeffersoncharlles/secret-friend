import { FetchAllEventsController } from '@/controllers/fetch-all-events'
import { FetchEventController } from '@/controllers/fetch-event'
import { SessionController } from '@/controllers/session-controller'
import { authenticate } from '@/middlewares/authenticate'
import { Router } from 'express'

const sessionController = new SessionController()
const fetchAllEventsController = new FetchAllEventsController()
const fetchEventController = new FetchEventController()

const adminRoutes = Router()

adminRoutes.post('/session', sessionController.handle)
adminRoutes.get('/hello', authenticate, (req, res) =>
  res.json({ message: 'hello' }),
)
adminRoutes.get('/events', authenticate, fetchAllEventsController.handle)
adminRoutes.get('/events/:id', authenticate, fetchEventController.handle)

export { adminRoutes }
