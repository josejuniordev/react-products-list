import { FETCH_PRODUCTS, fetchProductsFailed, fetchProductsSuccess } from '../ducks/products';
import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import productsAPI from '../integrations/ProductsAPI';

function* fetchProductsSaga() {
  try {
    const products = yield call(productsAPI.getAll);

    if (products) {
      yield put(fetchProductsSuccess(products.produtos));
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
