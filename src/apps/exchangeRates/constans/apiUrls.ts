export type urlsFields = {
  baseUrl: string;
  urlSuffix: string;

  // methods
  tableA: string;
};

export const apiUrls: urlsFields = {
  baseUrl: 'https://api.nbp.pl/api/',
  urlSuffix: '/?format=json',

  // methods
  tableA: 'exchangerates/tables/A/',
};
