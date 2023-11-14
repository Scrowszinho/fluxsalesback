import { Request, Response } from 'express';
import ProductsBidsService from '../services/ProductsBidsService';

class ProductsBidsController {
  async register(req: Request, res: Response) {
    try {
      const product = await ProductsBidsService.createNewBid(req.body);
      return res.status(200).send(product);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
}

export default new ProductsBidsController();