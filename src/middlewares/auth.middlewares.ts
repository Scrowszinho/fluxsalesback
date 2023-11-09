import { Request, Response } from 'express';

const authMiddleware = (req: Request, res: Response) => {
  const headers = req.headers;
  if (!headers.authorization) {
    return res.json({
      message: 'Usuario não autenticado.',
      code: 401,
    });
  }
  const token = headers.authorization.replace('Bearer ', '');
};
