import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction ) => {
  const headers = req.headers;
  if (!headers.authorization) {
    return res.status(401).send({
      message: 'Usuario não autenticado',
      code: 401,
    });
  }
  const token = headers.authorization.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_TOKEN_SIGNAME || '', (err, decodedToken: any) => {
    if (err) {
      return res.status(400).send({
        message: 'Sem permissão para realizar essa ação',
        code: 401,
      });
    }
    req.body.user_id = decodedToken.id;
    next();
  });
}

export default authMiddleware;
