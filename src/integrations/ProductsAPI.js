import httpRequest from './HttpRequest';
import { apiUrls } from './defaults';

class ProductsAPI {
  constructor() {
    this._routes = apiUrls[process.env.NODE_ENV];
    this._httpRequest = httpRequest;
    this.getAll = this.getAll.bind(this);
  }

  async search(body = false) {

  }

  async getAll() {
    return await this._httpRequest.get(
      this._routes.products.getAll,
    );
  }
}

export default new ProductsAPI();
