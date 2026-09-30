import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors/AppError';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  console.error(err);
  return res.status(500).json({
    statusCode: 500,
    message: 'Internal server error',
  });
}
