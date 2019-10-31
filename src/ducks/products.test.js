import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCESS,
  fetchProducts, fetchProductsFailed,
  fetchProductsSuccess, INITIAL_STATE
} from './products';

import productsReducer from './products';
import { productsMock } from '../mock/products-mock';

describe('(Ducks) Products', () => {

  describe('Action Creators', () => {

    it('fetchProducts function should return an action of type FETCH_PRODUCTS', () => {
      expect(fetchProducts().type).toEqual(FETCH_PRODUCTS);
    });

    it('fetchProductsSuccess function should return an action of type FETCH_PRODUCTS_SUCCESS', () => {
      expect(fetchProductsSuccess().type).toEqual(FETCH_PRODUCTS_SUCCESS);
    });

    it('fetchProductsFailed function should return an action of type FETCH_PRODUCTS_FAILED', () => {
      expect(fetchProductsFailed().type).toEqual(FETCH_PRODUCTS_FAILED);
    });

  });

  describe('Reducer', () => {

    it('should return the current state ever the action is unknown', () => {
      expect(
        productsReducer(INITIAL_STATE, {type: 'UNKNOWN_ACTION'})
      ).toBe(INITIAL_STATE);
    });

    it('FETCH_PRODUCTS_SUCCESS should set received products in data property', () => {
      expect(
        productsReducer(INITIAL_STATE, fetchProductsSuccess(productsMock)).data
      ).toMatchObject(productsMock);
    });

    it('FETCH_PRODUCTS_SUCCESS should set loading property to false', () => {
      expect(
        productsReducer(INITIAL_STATE, fetchProductsSuccess(productsMock)).loading.fetch
      ).toBe(false);
    });

    it('FETCH_PRODUCTS should set loading property to true', () => {
      expect(
        productsReducer(INITIAL_STATE, fetchProducts()).loading.fetch
      ).toBe(true);
    });

    it('FETCH_PRODUCTS_FAILED should set loading property to false', () => {
      expect(
        productsReducer(INITIAL_STATE, fetchProductsFailed()).loading.fetch
      ).toBe(false);
    });

    it('FETCH_PRODUCTS_FAILED should set received errors data in errors property', () => {
      const errors = [
        {message: 'some error happened'},
        {message: 'some error happened 2'},
      ];

      expect(
        productsReducer(INITIAL_STATE, fetchProductsFailed(errors)).errors
      ).toEqual(errors);
    });

  });

});
