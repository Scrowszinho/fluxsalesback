import { Request, Response } from 'express';
import ProductsBidsService from '../services/ProductsBidsService';
import { DefaultController } from '../../../defaults/Controller';

class ProductsBidsController extends DefaultController {
  public async register(req: Request, res: Response) {
    return this.handleRequest(
      async () => ProductsBidsService.createNewBid(req.body),
      req,
      res
    );
  }
}

export default new ProductsBidsController();