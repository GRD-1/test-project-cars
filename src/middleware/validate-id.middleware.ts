import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../types/custom-error.type';
import { INVALID_ID } from '../constants/err.constant';

export const validateId = (req: Request, res: Response, next: NextFunction): void => {
  const id = req.params?.id;
  let isValidType = false;
  switch (typeof id) {
    case 'string':
      if (id.length === 12 || id.length === 24) {
        isValidType = /^[0-9a-fA-F]+$/.test(id);
      }
      break;
    case 'number':
      isValidType = true;
      break;
    default:
      isValidType = false;
  }
  if (isValidType) {
    next();
    return;
  }
  const err = new CustomError(422, INVALID_ID);
  next(err);
};
