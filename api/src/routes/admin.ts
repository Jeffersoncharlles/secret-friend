import { SessionController } from '@/controllers/session-controller'
import { authenticate } from '@/middlewares/authenticate'
import { Router } from 'express'

const sessionController = new SessionController()

const adminRoutes = Router()

adminRoutes.post('/session', sessionController.handle)
adminRoutes.get('/hello', authenticate, (req, res) =>
  res.json({ message: 'hello' }),
)

export { adminRoutes }
