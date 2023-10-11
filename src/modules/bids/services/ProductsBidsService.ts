import { ApiError } from '../../../utils/apiError';
import { getOfferById } from '../../offers/services/OffersServices';
import { getProductById } from '../../products/services/ProductsService';
import { IBid } from '../dto/products-bids.interface';
import { getLastBidByOfferId, save } from '../repositories/ProductsBidsRepositories';

export const createNewBid = async (data: IBid) => {

    const offer = await getOfferById(data.offer_id)
    const product = await getProductById(offer.product_id);
        
    if(!offer.id) {
      throw new ApiError(400, 'A oferta ainda não foi criada');
    }

    const lastBid = await getLastBidByOfferId(data.offer_id);
    if (!lastBid?.id) {
      return save(data);
    }

    if (data.value <= lastBid.value) {
      throw new ApiError(400, `O valor do lance deve ser maior que R$ ${lastBid.value.toFixed(2)}`);
    }

    if (data.value >= lastBid.value + product.value_interval) {
      return save(data);
    } else {
      throw new ApiError(400, `O lance tem de ter uma diferença minima de R$ ${(product.value_interval).toFixed(2)}`);
    }
};

export const compareLastBid = async (value: number) => {

}