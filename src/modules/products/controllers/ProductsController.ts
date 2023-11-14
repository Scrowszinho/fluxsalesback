import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';
import { DefaultController } from '../../../defaults/Controller';

class ProductsController extends DefaultController {
  private productsService: ProductsService;

  constructor() {
    super();
    this.productsService = new ProductsService();
  }

  async register(req: Request, res: Response) {
    return this.handleRequest(async () => this.productsService.createNewProduct(req.body), req, res);
  }

  async getProduct(req: Request, res: Response) {
    return this.handleRequest(async () => this.productsService.getProductById(+req.params.id), req, res);
  }

  async getProductList(req: Request, res: Response) {
    const query = req.query.offset ? +req.query.offset : 0;
    const page = req.query.page ? +req.query.page : 0;

    return this.handleRequest(async () => this.productsService.getProductsByList(query, page), req, res);
  }
}

export default ProductsController;