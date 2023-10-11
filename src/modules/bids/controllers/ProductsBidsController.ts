import { Request, Response } from 'express';
import { createNewBid } from '../services/ProductsBidsService';


export const register = async (req: Request, res: Response) => {
  try {
    const product = await createNewBid(req.body);
    return res.status(200).send(product);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

