import { ApiError } from '../../../utils/apiError';
import { getProductById } from '../../products/services/ProductsService';
import { IOffer } from '../dto/offers.interface';
import { save, getOffer, getOfferByProduct, updateTimeOffer, getCompleteOffer } from '../repositories/OffersRepositories';

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

export const updateTimeOfferByBid = async (id: number) => {
    const getOffer = await getOfferById(id);
    if (!getOffer) {
        throw new ApiError(404, 'Oferta não encontrada')
    }
    const date = getOffer.end_date;
    date.setSeconds(date.getSeconds() + 15);
    return await updateTimeOffer(id, date);
}

export const getOfferByproductId = async (id: number) => {
    const offer = await getOfferByProduct(id);
    if (!offer) {
        throw new ApiError(404, 'Produto não encontrado')
    }
    return offer;
}

export const getCompleteOfferById = async (id: number) => {
    const offer =  await getCompleteOffer(id);
    if (!offer) {
        throw new ApiError(404, 'Oferta não encontrada')
    }
    return offer;
}