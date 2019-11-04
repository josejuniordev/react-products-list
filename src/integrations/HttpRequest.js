const defaulHeaders = {
  'Content-Type': 'application/json',
};

export const httpStatusCode = {
  UNAUTHORIZED: 401,
};

export class HttpRequest {
  constructor() {
    this.request = this.request.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  request(
    params = {
      url: undefined, method: undefined, headers: undefined, body: undefined,
    },
  ) {
    return fetch(params.url, params)
      .then((response) => {
        if (response.status === httpStatusCode.UNAUTHORIZED) {
          // eslint-disable-next-line no-alert
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
    return this.request(params);
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
    return this.request(params);
  }

  async put(url, body = {}, headers = {}) {
    const params = {
      url,
      method: 'PUT',
      headers: { ...defaulHeaders, ...headers },
      body: JSON.stringify(body),
    };
    // eslint-disable-next-line no-underscore-dangle
    return this.request(params);
  }
}

export default new HttpRequest();
