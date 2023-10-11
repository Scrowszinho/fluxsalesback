import { ApiError } from '../../../utils/apiError';
import { getProductById } from '../../products/services/ProductsService';
import { IOffer } from '../dto/offers.interface';
import { save, getOffer, getOfferByProduct } from '../repositories/OffersRepositories';

export const createNewOffer = async (data: IOffer) => {
    const product = await getProductById(data.product_id);
    if (!product.id) {
        throw new ApiError(404, 'Produto não encontrado')
    }
    return await save(data);
}

export const getOfferById = async (id: number) => {
    const offer = await getOffer(id);
    if (!offer) {
        throw new ApiError(404, 'Oferta não encontrada')
    }
    return offer;
}

export const getOfferByproductId = async (id: number) => {
    const offer = await getOfferByProduct(id);
    if (!offer) {
        throw new ApiError(404, 'Produto não encontrado')
    }
    return offer;
}