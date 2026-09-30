export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundException extends AppError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class NotAcceptableException extends AppError {
  constructor(message: string) {
    super(message, 406);
  }
}
