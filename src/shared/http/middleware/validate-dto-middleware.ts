import { NextFunction, Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export function validateDTO(dto: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const instance = plainToInstance(dto, req.body ?? {});
    const errors = await validate(instance);

    if (errors.length > 0) {
      const messages = errors.flatMap((error) =>
        Object.values(error.constraints ?? {}),
      );

      return res.status(400).json({
        statusCode: 400,
        message: messages,
        error: 'Bad Request',
      });
    }

    next();
  };
}
