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
        product: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async getOffers(take: number, skip: number) {
    return dataSource.offers.findMany({
      select: {
        id: true,
        start_date: true,
        end_date: true,
        offer_bid: {
          take: 1,
          orderBy: {
            value: 'asc',
          },
        },
        product: {
          select: {
            name: true,
          }
        },
        _count:{
          select:{
            offer_bid: true
          }
        }
      },
      take,
      skip
    });
  }
}

export default OffersRepository;
