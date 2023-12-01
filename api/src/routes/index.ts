import { Router } from 'express'
import { adminRoutes } from './admin'
import { publicRoutes } from './public'
import { authenticate } from '@/middlewares/authenticate'

const routes = Router()

routes.all('*', authenticate)
routes.use('/admin', adminRoutes)
routes.use('/events', publicRoutes)

export { routes }
