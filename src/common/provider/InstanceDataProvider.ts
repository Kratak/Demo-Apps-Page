import axios, { AxiosInstance } from 'axios';

class InstanceDataProvider {
  public static createAxiosInstance(
    baseUrl?: string,
    headers?: { [key: string]: string }
  ): AxiosInstance {
    return axios.create({
      baseURL: baseUrl,
      headers,
    });
  }
}

export default InstanceDataProvider;
