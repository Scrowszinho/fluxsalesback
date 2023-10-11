import { Request, Response } from 'express';
import { createNewOffer, getOfferById } from '../services/OffersServices';

export const register = async (req: Request, res: Response) => {
  try {
    const offer = await createNewOffer(req.body);
    return res.status(200).send(offer);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
    try {
      const offer = await getOfferById(+req.params.id);
      return res.status(200).send(offer);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  };
  