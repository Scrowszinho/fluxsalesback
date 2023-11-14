import { ApiError } from '../../../utils/apiError';
import OffersService from '../../offers/services/OffersServices';
import ProductsService from '../../products/services/ProductsService';
import { IBid } from '../dto/products-bids.interface';
import ProductsBidsRepository from '../repositories/ProductsBidsRepositories';

class ProductsBidsService {
  private productService: ProductsService;
  private offerService: OffersService;
  private productBidRepository: ProductsBidsRepository;
  constructor() {
    this.productService = new ProductsService();
    this.offerService = new OffersService();
    this.productBidRepository = new ProductsBidsRepository();
  }
  async createNewBid(data: IBid) {
    const offer = await this.offerService.getOfferById(data.offer_id);
    const product = await this.productService.getProductById(offer.product_id);
    const lastBid = await this.productBidRepository.getLastBidByOfferId(
      data.offer_id
    );

    if (!offer.id) {
      throw new ApiError(400, 'A oferta ainda não foi criada');
    }

    if (offer.start_date > new Date()) {
      throw new ApiError(400, 'A oferta ainda não está ativa');
    }

    if (!lastBid?.id) {
      const updateOffer = await this.offerService.updateTimeOfferByBid(
        data.offer_id
      );
      return this.productBidRepository.save(data);
    }

    if (data.value < lastBid.value) {
      throw new ApiError(
        400,
        `O valor do lance deve ser maior que R$ ${lastBid.value.toFixed(2)}`
      );
    }

    if (data.value >= lastBid.value + product.value_interval) {
      const updateOffer = await this.offerService.updateTimeOfferByBid(
        data.offer_id
      );
      return this.productBidRepository.save(data);
    } else {
      throw new ApiError(
        400,
        `O lance tem que ter uma diferença mínima de R$ ${product.value_interval.toFixed(
          2
        )}`
      );
    }
  }
}

export default new ProductsBidsService();
