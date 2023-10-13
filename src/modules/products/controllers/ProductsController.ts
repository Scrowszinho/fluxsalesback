import { Request, Response } from 'express';
import {
  createNewProduct,
  getProductById,
  getProductsByList,
} from '../services/ProductsService';

export const register = async (req: Request, res: Response) => {
  try {
    const product = await createNewProduct(req.body);
    return res.status(200).send(product);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(+req.params.id);
    return res.status(200).send(product);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const getProductList = async (req: Request, res: Response) => {
  try {
    const query = req.query.offest ? +req.query.offest : 0;
    const page = req.query.page ? +req.query.page : 0;

    const products = await getProductsByList(query, page);
    return res.status(200).send(products);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
