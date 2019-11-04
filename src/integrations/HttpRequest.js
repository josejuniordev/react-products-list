const defaulHeaders = {
  'Content-Type': 'application/json',
};

export const httpStatusCode = {
  UNAUTHORIZED: 401,
};

export class HttpRequest {
  // eslint-disable-next-line no-underscore-dangle
  async __request(params = {
    url: undefined, method: undefined, headers: undefined, body: undefined,
  }) {
    return fetch(params.url, params)
      .then((response) => {
        if (response.status === httpStatusCode.UNAUTHORIZED) {
          alert('usuário não autorizado');
        }

        return response.json();
      });
  }

  async get(url, headers = {}) {
    const params = {
      url,
      method: 'GET',
      headers: { ...defaulHeaders, ...headers },
    };

    // eslint-disable-next-line no-underscore-dangle
    return this.__request(params);
  }

  async post(url, body = {}, headers = {}) {
    const params = {
      url,
      method: 'POST',
      headers: { ...defaulHeaders, ...headers },
    };

    if (body) {
      params.body = JSON.stringify(body);
    }

    // eslint-disable-next-line no-underscore-dangle
    return this.__request(params);
  }

  async put(url, body = {}, headers = {}) {
    const params = {
      url,
      method: 'PUT',
      headers: { ...defaulHeaders, ...headers },
      body: JSON.stringify(body),
    };
    // eslint-disable-next-line no-underscore-dangle
    return this.__request(params);
  }
}

export default new HttpRequest();
