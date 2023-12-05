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
