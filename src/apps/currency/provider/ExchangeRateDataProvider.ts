import { AxiosResponse } from 'axios';
import DataProvider from './DataProvider';
import { apiUrls } from '../constans/apiUrls';
import { sevenDaysRangeISO8601 } from '../utils/sevenDaysRangeISO8601';

class ExchangeRateDataProvider extends DataProvider {
  public getTableA(date: Date): Promise<any> {
    const url =
      apiUrls.tableA + sevenDaysRangeISO8601(date) + apiUrls.urlSuffix;

    return this.axios
      .get(url)
      .then((response: AxiosResponse<any>) => response.data[0]);
  }
}

export default ExchangeRateDataProvider;
