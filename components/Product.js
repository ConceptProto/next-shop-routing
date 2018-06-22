import React from 'react';
import Link from 'next/link';

import Column from './Column';

export const ProductComponent = props => (
  <Column width="25%">
    <div className="product">
      <div className="img">
        <img src={props.product.imgUrl} alt={props.product.name} />
      </div>
      <Link as={`/product/${props.product.id}`} href={`/product/?id=${props.product.id}`}>
        <a>
          <p className="name">{props.product.name}</p>
        </a>
      </Link>
      <p className="price">${props.product.price}</p>
      <button>Add to cart</button>
    </div>
    <style jsx>{`
      .product {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 20px;
        background: #FFFFFF;
        border: 1px solid #E4E4E4;
        box-shadow: 0 4px 14px 7px rgba(121,121,121,0.05);
        border-radius: 4px;
        height: 350px;
        padding: 15px 20px;
        justify-content: space-between;
      }
      button {
        margin: -15px -20px;
        height 40px;
        background: #6364D8;
        color: #fff;
        font-weight: 200;
        border: none;
      }
      p.price {
        color: #F8CB00;
        font-size: 20px;
      }
    `}</style>
  </Column>
);

export default ProductComponent;
