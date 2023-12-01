import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/apiError';

const authMiddleware = (req: Request, res: Response, next: NextFunction ) => {
  const headers = req.headers;
  if (!headers.authorization) {
    return res.json({
      message: 'Usuario não autenticado.',
      code: 401,
    });
  }
  const token = headers.authorization.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_TOKEN_SIGNAME || '', (err, decodedToken: any) => {
    if (err) {
      throw new ApiError(400, 'Sem permissão para realizar essa ação');
    }
    req.body.user_id = decodedToken.id;
    next();
  });
}

export default authMiddleware;
