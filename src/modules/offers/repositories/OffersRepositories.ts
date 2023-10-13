import { IOffer } from '../dto/offers.interface';
import dataSource from '../../../shared/db/dataSource';

export const save = async (data: IOffer) => {
  return dataSource.offers.create({
    data,
  });
};

export const getOffer = async (id: number) => {
  return dataSource.offers.findFirst({
    where: { id },
  });
};

export const getOfferByProduct = async (id: number) => {
  return dataSource.offers.findFirst({
    where: { product_id: id },
  });
};

export const updateTimeOffer = async (id: number, date: Date) => {
  return dataSource.offers.update({
    data: {
      end_date: date,
    },
    where: {
      id,
    },
  });
};

export const getCompleteOffer = async (id: number) => {
  return await dataSource.offers.findFirst({
    where: {
      id,
    },
    include: {
      offer_bid: {
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      },
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
};
