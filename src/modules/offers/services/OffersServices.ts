import { ApiError } from '../../../utils/apiError';
import { IOffer } from '../dto/offers.interface';
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
    const offer = await this.getOfferByproductId(data.product_id);
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

  async getOfferByproductId(id: number) {
    const offer = await this.offerRepository.getOfferByProduct(id);
    if (!offer) {
      throw new ApiError(404, 'Produto não encontrado');
    }
    return offer;
  }

  async getCompleteOfferById(id: number) {
    const offer = await this.offerRepository.getCompleteOffer(id);
    if (!offer) {
      throw new ApiError(404, 'Oferta não encontrada');
    }
    return offer;
  }
}

export default OffersService;
