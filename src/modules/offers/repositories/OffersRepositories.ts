import { IOffer } from '../dto/offers.interface';
import dataSource from '../../../shared/db/dataSource';

export const save = async (data: IOffer) => {
    return dataSource.offers.create({
        data
    });
}

export const getOffer = async (id: number) => {
    return dataSource.offers.findFirst({
        where: { id },
    })
}

export const getOfferByProduct = async (id: number) => {
    return dataSource.offers.findFirst({
        where: { product_id: id },
    })
}