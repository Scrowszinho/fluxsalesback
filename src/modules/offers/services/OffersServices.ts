import { ApiError } from '../../../utils/apiError';
import { ICompleteOffer, IOffer, IOfferFormated } from '../dto/offers.interface';
import ProductsService from '../../products/services/ProductsService';
import OffersRepository from '../repositories/OffersRepositories';

class OffersService {
  private productService: ProductsService;
  private offerRepository: OffersRepository;
  constructor() {
    this.productService = new ProductsService();
    this.offerRepository = new OffersRepository();
  }
  
  async createNewOffer(data: IOffer) {
    const product = await this.productService.getProductById(data.product_id);
    const offer = await this.isOfferCreated(data.product_id);    
    if(offer) {
      throw new ApiError(400, 'Uma oferta ja esta utilizando este produto');
    }
    if (!product.id) {      
      throw new ApiError(404, 'Produto não encontrado');
    }
    return await this.offerRepository.save(data);
  }

  async getOfferById(id: number) {
    const offer = await this.offerRepository.getOffer(id);
    if (!offer) {
      throw new ApiError(404, 'Oferta não encontrada');
    }
    return offer;
  }

  async updateTimeOfferByBid(id: number) {
    const getOffer = await this.getOfferById(id);
    if (!getOffer) {
      throw new ApiError(404, 'Oferta não encontrada');
    }
    const date = getOffer.end_date;
    date.setSeconds(date.getSeconds() + 15);
    return await this.offerRepository.updateTimeOffer(id, date);
  }

  async isOfferCreated(id: number) {
    const offer = await this.offerRepository.getOfferByProduct(id);    
    return offer?.id;
  }

  async getCompleteOfferById(id: number) {
    const offer = await this.offerRepository.getCompleteOffer(id);
    if (!offer) {
      throw new ApiError(404, 'Oferta não encontrada');
    }
    const formated : ICompleteOffer = {
      ...offer,
      last_bid: offer?.offer_bid.length ? offer?.offer_bid[0].value : 0,
      bids: offer?._count.offer_bid ?? 0,
    }
    delete formated._count;
    return formated;
  }

  async getOffers(params: any) {
    const take = params.take ? +params.take : 1;
    const skip = params.skip ? +params.skip : 0
    const offers = await this.offerRepository.getOffers(take, skip);
    const formated: IOfferFormated[] = [];    
    offers.forEach(offer => formated.push({
      id: offer.id,
      bids: offer._count.offer_bid,
      end_date: offer.end_date,
      last_bid: offer.offer_bid.length ? offer.offer_bid[0].value : 0,
      product_name: offer.product.name,
      start_date: offer.start_date,
    }));
    return formated;
  }
}

export default OffersService;
