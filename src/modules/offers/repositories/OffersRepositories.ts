import dataSource from '../../../shared/db/dataSource';
import { IOffer } from '../dto/offers.interface';

class OffersRepository {
  async save(data: IOffer) {
    return dataSource.offers.create({
      data,
    });
  }

  async getOffer(id: number) {
    return dataSource.offers.findFirst({
      where: { id },
    });
  }

  async updateTimeOffer(id: number, date: Date) {
    return dataSource.offers.update({
      data: {
        end_date: date,
      },
      where: {
        id,
      },
    });
  }

  async getOfferByProduct(id: number) {
    return dataSource.offers.findFirst({
      where: { product_id: id },
    });
  }

  async getCompleteOffer(id: number) {
    return dataSource.offers.findFirst({
      where: { id },
      include: {
        product: true,
      },
    });
  }
}

export default OffersRepository;