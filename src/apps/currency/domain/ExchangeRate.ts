export interface ExchangeRateFiels {
  currency: string;
  code: string;
  mid: number;
}

class ExchangeRate implements ExchangeRateFiels {
  readonly currency: string;
  readonly code: string;
  readonly mid: number;

  constructor(data: ExchangeRateFiels) {
    this.currency = data.currency;
    this.mid = data.mid;
    this.code = data.code;
  }
}

export default ExchangeRate;
