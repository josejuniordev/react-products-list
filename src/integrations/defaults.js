const developmentApiUrl = 'https://www.mocky.io/v2';
const productionApiUrl = 'https://www.mocky.io/v2';

// eslint-disable-next-line import/prefer-default-export
export const apiUrls = {
  production: {
    products: {
      getAll: `${productionApiUrl}/5d3b57023000005500a2a0a6`,
    },
  },
  development: {
    products: {
      getAll: `${developmentApiUrl}/5d3b57023000005500a2a0a6`,
    },
  },
};
