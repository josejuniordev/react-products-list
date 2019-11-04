// ACTION TYPES
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const ADD_PRODUCT_TO_FAVORITES = 'ADD_PRODUCT_TO_FAVORITES';
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const REMOVE_FAVORITE_PRODUCT = 'REMOVE_FAVORITE_PRODUCT';

// INITIAL STATE
export const INITIAL_STATE = {
  data: [],
  errors: {
    fetch: [],
  },
  loading: {
    fetch: false,
    favorites: false,
  },
};

// REDUCER
export default function (state = INITIAL_STATE, action) {
  const { type, products, errors } = action;

  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: {
          ...state.loading,
          fetch: true,
        },
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: products,
        loading: {
          ...state.loading,
          fetch: false,
        },
      };
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        loading: {
          ...state.loading,
          fetch: false,
        },
        errors: [...errors],
      };
    case ADD_PRODUCT_TO_FAVORITES:
      return {
        ...state,
        loading: {
          ...state.loading,
          favorites: true,
        },
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        data: products,
        loading: {
          ...state.loading,
          favorites: false,
        },
      };
    case REMOVE_FAVORITE_PRODUCT:
      return {
        ...state,
        loading: {
          ...state.loading,
          favorites: true,
        },
      };
    default:
      return state;
  }
}

// ACTION CREATORS
export function fetchProducts() {
  return { type: FETCH_PRODUCTS };
}

export function fetchProductsSuccess(products = []) {
  return { type: FETCH_PRODUCTS_SUCCESS, products };
}

export function fetchProductsFailed(errors = []) {
  return { type: FETCH_PRODUCTS_FAILED, errors };
}

export function addProductToFavorites(productId) {
  return { type: ADD_PRODUCT_TO_FAVORITES, productId };
}

export function updateProducts(products) {
  return { type: UPDATE_PRODUCTS, products };
}

export function removeFavoriteProduct(productId) {
  return { type: REMOVE_FAVORITE_PRODUCT, productId };
}
