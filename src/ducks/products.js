// ACTION TYPES
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

// INITIAL STATE
export const INITIAL_STATE = {
  data: [],
  errors: {
    fetch: [],
  },
  loading: {
    fetch: false,
  }
};

// REDUCER
export default function(state = INITIAL_STATE, action) {
  const {type, products, errors} = action;

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
    default:
      return state;
  }
};

// ACTION CREATORS
export function fetchProducts() {
  return {type: FETCH_PRODUCTS}
}

export function fetchProductsSuccess(products = []) {
  return {type: FETCH_PRODUCTS_SUCCESS, products}
}

export function fetchProductsFailed(errors = []) {
  return {type: FETCH_PRODUCTS_FAILED, errors}
}
