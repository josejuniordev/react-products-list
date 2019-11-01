import { FETCH_PRODUCTS, fetchProductsFailed, fetchProductsSuccess } from '../ducks/products';
import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import productsAPI from '../integrations/ProductsAPI';
import Product from '../classes/Product';

function* fetchProductsSaga() {
  try {
    const products = yield call(productsAPI.getAll);

    if (products) {
      const productsInstance = products.produtos.map(product => new Product(product));
      yield put(fetchProductsSuccess(productsInstance));
    }
  } catch (errors) {
    yield put(fetchProductsFailed(errors));
    console.error(errors);
  }
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

export default function* () {
  yield all([
    fork(watchFetchProducts),
  ])
}
