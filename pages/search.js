
import React from 'react';
import Head from 'next/head';

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
          <Container>
            
          </Container>
        </Layout>
        <Container width="80%">
          <div className="items">
            <ProductList query={this.props.url.query} />
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
export default Index;
