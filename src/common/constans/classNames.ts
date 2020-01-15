export type classNamesFields = {
  // common
  paper: string;

  // body
  pageWrapper: string;
  pageWrapper__element: () => string;

  // navigation
  navigation_wrapper: string;
  brick: string;
};

export const classNames: classNamesFields = {
  // common
  paper: 'paper',

  // body
  pageWrapper: 'page-wrapper',
  'pageWrapper__element': () => classNames.pageWrapper + '__element',

  // navigation
  navigation_wrapper: 'navigation-wrapper',
  brick: 'brick',
};
