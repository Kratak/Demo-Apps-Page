import { AxiosInstance } from 'axios';
import InstanceDataProvider from '../../../common/provider/InstanceDataProvider';
import { apiUrls } from '../constans/apiUrls';

export default class DataProvider {
  protected axios: AxiosInstance;

  constructor() {
    this.axios = InstanceDataProvider.createAxiosInstance(apiUrls.baseUrl);
  }
}
