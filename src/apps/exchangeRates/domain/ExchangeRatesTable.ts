import ExchangeRate from './ExchangeRate';

export interface ExchangeRatesTableFields {
  table: string;
  no: string;
  effectiveDate: string;
  rates: ExchangeRate[];
}

class ExchangeRatesTable implements ExchangeRatesTableFields {
  readonly table: string;
  readonly no: string;
  readonly effectiveDate: string;
  readonly rates: ExchangeRate[];

  constructor(data: ExchangeRatesTableFields) {
    this.table = data.table;
    this.effectiveDate = data.effectiveDate;
    this.no = data.no;
    this.rates = data.rates;
  }
}

export default ExchangeRatesTable;
