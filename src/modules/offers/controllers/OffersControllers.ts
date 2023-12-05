import { Request, Response } from 'express';
import OffersService from '../services/OffersServices';
import { DefaultController } from '../../../defaults/Controller';

class OffersController extends DefaultController {
  private offerService: OffersService;

  constructor() {
    super();
    this.offerService = new OffersService();
  }

  async register(req: Request, res: Response) {
    return this.handleRequest(
      async () => this.offerService.createNewOffer(req.body),
      req,
      res
    );
  }

  async getCompleteOffer(req: Request, res: Response) {
    return this.handleRequest(
      async () => this.offerService.getCompleteOfferById(+req.params.id),
      req,
      res
    );
  }

  async getById(req: Request, res: Response) {
    return this.handleRequest(
      async () => this.offerService.getOfferById(+req.params.id),
      req,
      res
    );
  }

  async getOffers(req: Request, res: Response) {
    return this.handleRequest(
      async () => this.offerService.getOffers(req.query),
      req,
      res
    );
  }
}

export default OffersController;
