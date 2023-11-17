import dataSource from '../../../shared/db/dataSource';
import { ICreateProduct } from '../dto/products.interface';

class ProductsRepository {
  async save(data: ICreateProduct) {
    return dataSource.products.create({
      data,
    });
  }

  async getById(id: number) {
    return dataSource.products.findFirst({
      where: {
        id,
      },
    });
  }

  async getProducts(offset: number, pages: number) {
    return dataSource.products.findMany({
      skip: offset,
      take: pages,
    });
  }
}

export default ProductsRepository;