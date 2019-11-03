const defaulHeaders = {
  'Content-Type': 'application/json',
};

export const httpStatusCode = {
  UNAUTHORIZED: 401,
};

export class HttpRequest {

  async _request(params = {url: undefined, method: undefined, headers: undefined, body: undefined}) {
    try {
      return await fetch(params.url, params)
        .then(response => {
          if (response.status === httpStatusCode.UNAUTHORIZED) {
            alert('usuário não autorizado');
          }

          return response.json();
        })
    } catch (e) {
      console.log(e)
    }
  }

  async get(url, headers = {}) {
    const params = {
      url,
      method: 'GET',
      headers: {...defaulHeaders, ...headers}
    };

    return await this._request(params);
  }

  async post(url, body = {}, headers = {}) {
    const params = {
      url,
      method: 'POST',
      headers: {...defaulHeaders, ...headers},
    };

    if (body) {
      params.body = JSON.stringify(body);
    }

    return await this._request(params);
  }

  async put(url, body = {}, headers = {}) {
    const params = {
      url,
      method: 'PUT',
      headers: {...defaulHeaders, ...headers},
      body: JSON.stringify(body),
    };
    return await this._request(params);
  }
}

export default new HttpRequest();
