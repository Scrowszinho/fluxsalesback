import { ApiError } from '../../../utils/apiError';
import { ICreateProduct } from '../dto/products.interface';
import { save, getById, getProducts } from '../repositories/ProductsRepositories';

export const createNewProduct = async (data: ICreateProduct) => {
  const product = await save(data);
  return product;
};

export const getProductById = async (id: number) => {
  if (!id) {
    throw new ApiError(404, 'Erro ao localizar produto');
  }
  const product = await getById(id);
  if (!product?.id) {
    throw new ApiError(404, 'Produto não encontrado');
  }
  return product;
};

export const getProductsByList = async (offset: number, page: number) => {
  const products = await getProducts(offset, page);
  return products;
};