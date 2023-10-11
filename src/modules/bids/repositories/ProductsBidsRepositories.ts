import dataSource from '../../../shared/db/dataSource';
import { IBid } from '../dto/products-bids.interface';

export const save = async (data: IBid) => {
  return await dataSource.offer_bid.create({
    data,
  });
};

export const getLastBidByOfferId = async (id: number) => {
  return await dataSource.offer_bid.findFirst({
    where: {
        offer_id: id
    },
    orderBy: {
      value: 'desc',
    },
  });
};
