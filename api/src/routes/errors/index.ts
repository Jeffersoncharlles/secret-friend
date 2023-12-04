import { NextFunction, Request, Response } from 'express'
import { AppError } from './appError'

const errorsMiddlewares = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
      status: 'error',
    })
  }
  return response.status(500).json({
    status: 'Error',
    message: `Internal server error - ${err.message}`,
  })
}

export { errorsMiddlewares }
