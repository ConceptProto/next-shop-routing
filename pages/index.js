import React from 'react';
import Head from 'next/head';
import withData from '../lib/withData';

import {
  Container,
  Column,
  Layout,
  Row,
  Link,
  Nav,
  H1,
  H3,
  ProductList
} from '../components';

class Index extends React.Component {
  
  render() {
    return (
      <div>
        <Layout>
          <Nav />
          <Container />
        </Layout>
        <Container width="80%">
          <div className="items">
            <H3>Creams and Gels</H3>
            <ProductList client={this.props.client} />
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
console.log(withData(Index));
export default withData(Index);
