import { ApiError } from '../../../utils/apiError';
import ProductsRepository from '../repositories/ProductsRepositories';
import { ICreateProduct } from '../dto/products.interface';
import { CreateProduct } from '../dto/CreateProducts';

class ProductsService {
  private productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  async createNewProduct(data: ICreateProduct) {
    try {
      const product = CreateProduct.safeParse(data)
      if (!product.success) {
        throw new ApiError(400, product.error.issues[0].message);
      }
      return await this.productsRepository.save(data);
    } catch (error: any) {
      throw new ApiError(error.statusCode, error.message);
    }
  }

  async getProductById(id: number) {
    try {
      const product = await this.productsRepository.getById(id);

      if (!product) {
        throw new ApiError(404, 'Product not found');
      }

      return product;
    } catch (error) {
      throw new ApiError(500, 'Error retrieving product by ID');
    }
  }

  async getProductsByList(offset: number, pages: number) {
    try {
      return await this.productsRepository.getProducts(offset, pages);
    } catch (error) {
      throw new ApiError(500, 'Error retrieving product list');
    }
  }
}

export default ProductsService;