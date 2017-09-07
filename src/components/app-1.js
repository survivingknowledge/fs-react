import React, { Component } from 'react';

import Product from './app-2';
import Seed from './seed';

class ProductList extends Component {
  render() {

    const product = Seed.products[0];

    return (
      <div className="ui unstackable items">

        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
      </div>
    );
  }
}
 export default ProductList;
