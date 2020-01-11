import { AxiosResponse } from 'axios';
import DataProvider from './DataProvider';
import { apiUrls } from '../constans/apiUrls';
import { sevenDaysRangeISO8601 } from '../utils/sevenDaysRangeISO8601';
import ExchangeRatesTable from '../domain/ExchangeRatesTable';

class ExchangeRateDataProvider extends DataProvider {
  public getTableA(date: Date): Promise<ExchangeRatesTable> {
    const url =
      apiUrls.tableA + sevenDaysRangeISO8601(date) + apiUrls.urlSuffix;

    return this.axios
      .get(url)
      .then((response: AxiosResponse<ExchangeRatesTable[]>) => {
        const newestRatesIndex = response.data.length - 1;

        return response.data[newestRatesIndex];
      });
  }
}

export default ExchangeRateDataProvider;
