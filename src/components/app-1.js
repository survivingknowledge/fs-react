import React, { Component } from 'react';

import Product from './app-2';

class ProductList extends Component {
  render() {
    return (
      <div className="ui unstackable items">
        <Product />
      </div>
    );
  }
}
 export default ProductList;
