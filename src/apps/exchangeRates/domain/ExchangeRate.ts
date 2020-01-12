export interface ExchangeRateFields {
  currency: string;
  code: string;
  mid: number;
}

class ExchangeRate implements ExchangeRateFields {
  readonly currency: string;
  readonly code: string;
  readonly mid: number;

  constructor(data: ExchangeRateFields) {
    this.currency = data.currency;
    this.mid = data.mid;
    this.code = data.code;
  }
}

export default ExchangeRate;
