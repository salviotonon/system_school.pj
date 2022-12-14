import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

interface IToken {
  id: string,
  email: string,
}

export function isAuth(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError('Token invalido');
  }
  
  const token = authHeader.split(' ')[1];

  try {
    const decode = verify(token, 'dasdasdasf1');
  
    const  { id } = decode as IToken;
    

    return next();
  } catch (error) {
    throw new AppError('Token inválido');
  }
}