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
  H3
} from '../components';

class Index extends React.Component {

  render() {
    return (
      <div>
        <Layout>
          <Nav />
        </Layout>
        <Container width="80%">
          <div className="items">
            <H3>About  Page</H3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur voluptate dolorem eveniet ut suscipit ad! Minus, saepe fugiat. Repellendus voluptates repudiandae soluta dolore, labore ratione ex incidunt eaque harum. </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur voluptate dolorem eveniet ut suscipit ad! Minus, saepe fugiat. Repellendus voluptates repudiandae soluta dolore, labore ratione ex incidunt eaque harum.</p>
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
