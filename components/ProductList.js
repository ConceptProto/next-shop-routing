import React from 'react';
import productsToRender from '../services/data';

import Product from './Product';
import Row from './Row';

export const ProductList = props => {
  let products;
  const q = props.query.q;
  if (q) {
    products = productsToRender.filter(product =>
      product.name.toLowerCase().includes(q.toLowerCase())
    );
  } else {
    products = productsToRender;
  }
  return (
    <div>
      {products.length ? (
        <Row>{products.map(product => <Product product={product} />)}</Row>
      ) : (
        <p>No product matched your search. Try again</p>
      )}
    </div>
  );
};

export default ProductList;
