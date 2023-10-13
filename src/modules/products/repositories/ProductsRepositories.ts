import dataSource from '../../../shared/db/dataSource';
import { ICreateProduct } from '../dto/products.interface';

export const save = async (data: ICreateProduct) => {
   return await dataSource.products.create({
        data
    });
}

export const getById = async (id: number) => {
    return await dataSource.products.findFirst({
        where: {
            id
        }
    });
}

export const getProducts = async (offset: number, pages: number) => {    
    return await dataSource.products.findMany({
       skip: offset,
       take: pages
    });
}