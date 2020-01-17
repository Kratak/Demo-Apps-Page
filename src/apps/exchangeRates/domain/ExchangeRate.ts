import { Currencies } from '../constans/curriencesCodes';

export interface ExchangeRateFields {
  currency: string;
  code: Currencies;
  mid: number;
}

class ExchangeRate implements ExchangeRateFields {
  readonly currency: string;
  readonly code: Currencies;
  readonly mid: number;

  constructor(data: ExchangeRateFields) {
    this.currency = data.currency;
    this.mid = data.mid;
    this.code = data.code;
  }
}

export default ExchangeRate;
