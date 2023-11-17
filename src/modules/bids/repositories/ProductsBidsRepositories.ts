import dataSource from '../../../shared/db/dataSource';
import { IBid } from '../dto/products-bids.interface';

class ProductsBidsRepository {
  async save(data: IBid) {
    try {
      const createdBid = await dataSource.offer_bid.create({
        data,
      });

      return createdBid;
    } catch (error) {
      console.error('Error in save function:', error);
      throw new Error('Error saving bid');
    }
  }

  async getLastBidByOfferId(id: number) {
    try {
      const lastBid = await dataSource.offer_bid.findFirst({
        where: {
          offer_id: id,
        },
        orderBy: {
          value: 'desc',
        },
      });

      return lastBid;
    } catch (error) {
      throw new Error('Error getting last bid by offer ID');
    }
  }
}

export default ProductsBidsRepository;

