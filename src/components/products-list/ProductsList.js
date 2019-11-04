import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ProductCard from './product-card/ProductCard';
import Product from '../../classes/Product';
import './ProductsList.scss';

const amount = 3;

export function ProductsList(
  {
    products,
  },
) {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [firstUpdate, setFirstUpdate] = useState(true);
  const [keepTheState, setKeepTheState] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [limit, setLimit] = useState(amount);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function loadProducts() {
      setLoadMore(false);
      let loadedProductsList;

      if (keepTheState) {
        setKeepTheState(false);
        const sliced = products.slice(0, limit);
        loadedProductsList = [...sliced];
      } else {
        if (loadedProducts.length >= products.length) {
          return;
        }

        const sliced = products.slice(offset, limit);
        loadedProductsList = [...loadedProducts, ...sliced];

        setOffset(offset + amount);
        setLimit(limit + amount);
      }

      setLoadedProducts(loadedProductsList);
    }

    if (loadMore) {
      loadProducts();
    }
  }, [loadMore, limit, loadedProducts, offset, products, keepTheState]);

  useEffect(() => {
    function handleProductsListUpdate() {
      if (firstUpdate) {
        setLoadMore(true);
        setFirstUpdate(false);
      } else {
        setKeepTheState(true);
        setLoadMore(true);
      }
    }

    if (products && products.length) {
      handleProductsListUpdate();
    } else {
      setLoadedProducts(products);
    }
  }, [products, firstUpdate]);

  useEffect(() => {
    const wrapper = document.querySelector('.layout-container');

    const timer = setInterval(() => {
      const scrollLimit = wrapper.offsetHeight - window.innerHeight;

      if (window.scrollY >= scrollLimit) {
        setLoadMore(true);
      }
    }, 500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <>
      <section className="products-list">
        {
          loadedProducts && loadedProducts.length
            ? (
              loadedProducts.map((product) => (
                <div key={product.id} className="products-list__item">
                  <ProductCard key={product.id} product={product} />
                </div>
              ))
            )
            : <p>Não existem produtos para exibir.</p>
        }
      </section>
      {
        loadMore && <p>carregando ...</p>
      }
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.instanceOf(Product),
  ),
};

ProductsList.defaultProps = {
  products: [],
};

export default withRouter(ProductsList);
