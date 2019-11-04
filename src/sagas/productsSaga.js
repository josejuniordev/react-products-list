import {
  takeLatest,
  all,
  fork,
  call,
  put,
  select,
} from 'redux-saga/effects';
import {
  ADD_PRODUCT_TO_FAVORITES,
  FETCH_PRODUCTS,
  fetchProductsFailed,
  fetchProductsSuccess,
  REMOVE_FAVORITE_PRODUCT, updateProducts,
} from '../ducks/products';
import productsAPI from '../integrations/ProductsAPI';
import Product from '../classes/Product';
// eslint-disable-next-line import/no-cycle
import { updateProductFavoriteStatus } from '../helpers/products-helper';
import { getProducts } from '../helpers/store-helper';

function* fetchProductsSaga() {
  try {
    const products = yield call(productsAPI.getAll);

    if (products) {
      const productsInstance = products.produtos.map((product) => new Product(product));
      yield put(fetchProductsSuccess(productsInstance));
    }
  } catch (errors) {
    yield put(fetchProductsFailed(errors));
    console.error(errors);
  }
}

function* addProductToFavoritesSaga({ productId }) {
  try {
    const products = yield select(getProducts);
    const updatedProducts = updateProductFavoriteStatus(products.data, productId, true);

    yield put(updateProducts(updatedProducts));
  } catch (errors) {
    console.error(errors);
  }
}

function* removeFavoriteProductSaga({ productId }) {
  try {
    const products = yield select(getProducts);
    const updatedProducts = updateProductFavoriteStatus(products.data, productId, false);

    yield put(updateProducts(updatedProducts));
  } catch (errors) {
    console.error(errors);
  }
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

function* watchAddProductToFavorites() {
  yield takeLatest(ADD_PRODUCT_TO_FAVORITES, addProductToFavoritesSaga);
}

function* watchRemoveFavoriteProduct() {
  yield takeLatest(REMOVE_FAVORITE_PRODUCT, removeFavoriteProductSaga);
}

export default function* () {
  yield all([
    fork(watchFetchProducts),
    fork(watchAddProductToFavorites),
    fork(watchRemoveFavoriteProduct),
  ]);
}
