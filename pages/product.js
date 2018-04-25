
import React from 'react';
import Head from 'next/head';


import products from '../services/data';

import {
  Container,
  Column,
  Layout,
  Row,
  Link,
  Nav,
  H1,
  H3,
  Product
} from '../components';

class Product extends React.Component {

  render() {
    return (
      <div>
        <Layout>
          <Nav />
          <Container>
            
          </Container>
        </Layout>
        <Container width="80%">
          <div className="items">
            <Product product={products.find(product => product.id === Number(this.props.url.query.id))} />
          </div>
        </Container>
        <style jsx>{`
          .items {
            margin-top: 30px;
          }
        `}</style>
      </div>
    );
  }
}
export default Product;
