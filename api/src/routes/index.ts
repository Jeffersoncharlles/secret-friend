import { Router } from 'express'
import { adminRoutes } from './admin'
import { publicRoutes } from './public'
import { reques } from '@/middlewares/req'

const routes = Router()

routes.all('*', reques)
routes.use('/admin', adminRoutes)
routes.use('/events', publicRoutes)

export { routes }
