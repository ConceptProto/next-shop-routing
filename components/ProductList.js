import React from 'react';
import productsToRender from '../services/data';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ProductComponent from './Product';
import Row from './Row';

export const ProductList = props => {
  let products;
  const q = props.query && props.query.q;
  if (q) {    
    props.allProductsQuery.variables.filter = q;
    products = props.allProductsQuery.allProducts;
  } else {
    props.allProductsQuery.variables.filter = '';
    products = props.allProductsQuery.allProducts;
  }
  return (
    <div>
      {products && products.length ? (
        <Row>{products.map(product => <ProductComponent product={product} />)}</Row>
      ) : (
        <p>No product matched your search. Try again</p>
      )}
    </div>
  );
};


const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery($filter: String) {
    allProducts(filter: {name_contains: $filter}) {
      id
      name
      imgUrl
      price
    }
  }
`;

export default graphql(ALL_PRODUCTS_QUERY, { name: 'allProductsQuery' })(
  ProductList
);
