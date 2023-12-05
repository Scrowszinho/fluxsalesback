export interface IOffer {
  start_date: Date;
  end_date: Date;
  product_id: number;
  value_interval: number;
}

export interface IOfferFormated {
  id: number;
  start_date: Date | string;
  end_date: Date | string;
  last_bid: number;
  product_name: string;
  bids: number;
}

export interface IBid {
  id: number;
  value: number;
  offer_id: number;
  user_id: number;
  active: boolean;
  created_date: Date | string;
  updated_at: Date | string;
}

export interface ICompleteOffer {
  id: number;
  active: boolean;
  created_date: Date | string;
  updated_at: Date | string;
  start_date: Date | string;
  end_date: Date | string;
  value_interval: number;
  product_id: number;
  last_bid: number;
  bids: number;
  _count?: { offer_bid: number; };
  product: {
    id: number;
    name: string;
    description: string;
    value: number;
    final_value: number;
    user: {
      name: string;
    };
  };
  offer_bid: Array<IBid>;
}
