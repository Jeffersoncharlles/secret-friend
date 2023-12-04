import { RequestHandler } from 'express'
import { env } from 'process'

export const authenticate: RequestHandler = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Unauthorized', status: 'error' })
  }

  const token = req.headers.authorization?.split(' ')[1]

  const currentToken =
    env.SECRET_JWT +
    Intl.DateTimeFormat('pt-br').format(new Date()).split('/').join('')

  if (!(token === currentToken)) {
    return res.status(403).json({ message: 'Unauthorized', status: 'error' })
  }

  next()
}
