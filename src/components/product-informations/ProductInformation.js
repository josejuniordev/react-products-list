import React from 'react';
import PropTypes from 'prop-types';
import './ProductInformation.scss';
import ImageDisplay from '../product-parts/image-display/ImageDisplay';
import ContentHeader from '../layout/content-header/ContentHeader';
import { componentsSizes } from '../../constants/components-sizes';
import Product from '../../classes/Product';
import { generateStringKey } from '../../helpers/utils';

function ProductInformation(
  {
    product,
  },
) {
  return (
    <article className="product-information">
      <section className="product-information__image-and-details">
        <div className="product-information__image">
          <ImageDisplay product={product} />
        </div>
        <div className="product-information__details">
          <h2 className="product-information__title">Detalhes do produto</h2>
          <p>{product.longDescription}</p>
        </div>
      </section>
      <section className="product-information__datasheet">
        <ContentHeader size={componentsSizes.SMALL} title="Ficha técnica" />
        <ul className="product-information__datasheet-list">
          {
            product.datasheet && product.datasheet.length
              && product.datasheet.map((item) => (
                <li key={generateStringKey(item.titulo)}>
                  <span>
                    {item.titulo}
:
                  </span>
                  {' '}
                  {item.descricao}
                </li>
              ))
          }
        </ul>
      </section>
    </article>
  );
}

ProductInformation.propTypes = {
  product: PropTypes.instanceOf(Product),
};

ProductInformation.defaultProps = {
  product: null,
};

export default ProductInformation;
