import { AxiosResponse } from 'axios';
import DataProvider from './DataProvider';
import { apiUrls } from '../constans/apiUrls';

class ExchangeRateDataProvider extends DataProvider {
  public create(startDate: Date): Promise<any> {
    return this.axios
      .post(apiUrls.tableA + startDate.toISOString() + apiUrls.urlSuffix)
      .then((response: AxiosResponse<any>) => response.data);
  }
}

export default ExchangeRateDataProvider;
