import httpRequest from './HttpRequest';
import { apiUrls } from './defaults';

class ProductsAPI {
  constructor() {
    this.routes = apiUrls[process.env.NODE_ENV];
    this.httpRequest = httpRequest;
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    return this.httpRequest.get(
      this.routes.products.getAll,
    );
  }
}

export default new ProductsAPI();
