import { combineReducers } from 'redux';
import products from './ducks/products';

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
