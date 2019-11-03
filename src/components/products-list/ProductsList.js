import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './product-card/ProductCard';
import Product from '../../classes/Product';
import './ProductsList.scss';
import { withRouter } from 'react-router-dom';

const amount = 3;

export function ProductsList(
  {
    products,
  }
) {

  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [limit, setLimit] = useState(amount);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (loadMore) {
      loadProducts();
    }

    function loadProducts() {
      setLoadMore(false);

      if (loadedProducts.length >= products.length) {
        return;
      }

      const sliced = products.slice(offset, limit);
      const previousLoaded = [...loadedProducts, ...sliced];

      setLoadedProducts(previousLoaded);
      setOffset(offset + amount);
      setLimit(limit + amount);
    }
  }, [loadMore, limit, loadedProducts, offset, products]);

  useEffect(() => {
    if (products && products.length) {
      setLoadMore(true);
    }
  }, [products]);

  useEffect(() => {
    const wrapper = document.querySelector('.layout-container');

    const timer = setInterval(() => {
      const scrollLimit = wrapper.offsetHeight - window.innerHeight;

      if (window.scrollY >= scrollLimit) {
        setLoadMore(true);
      }
    }, 500);

    return () => {
      window.clearInterval(timer)
    }
  }, []);

  return (
    <Fragment>
      <section className='products-list'>
        {
          loadedProducts && loadedProducts.length
            ? (
              loadedProducts.map(product => {
                return (
                  <div key={product.id} className="products-list__item">
                    <ProductCard key={product.id} product={product} />
                  </div>
                );
              })
            )
            : <p>Não existem produtos para exibir.</p>
        }
      </section>
      {
        loadMore && <p>carregando ...</p>
      }
    </Fragment>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.instanceOf(Product)
  ),
};

ProductsList.defaultProps = {
  products: [],
};

export default withRouter(ProductsList);
