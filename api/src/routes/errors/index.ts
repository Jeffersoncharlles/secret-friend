import { NextFunction, Request, Response } from 'express'
import { AppError } from './appError'
import { ZodError } from 'zod'

const errorsMiddlewares = (
  err: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    })
  }
  if (err instanceof ZodError) {
    return response.status(400).send({
      message: 'Validation error.',
      issues: err.format()._errors,
    })
  }
  return response.status(500).json({
    status: 'Error',
    message: `Internal server error - ${err.message}`,
  })
}

export { errorsMiddlewares }
