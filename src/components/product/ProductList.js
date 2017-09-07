import React, { Component } from 'react';

import Product from './Product';

import Seed from '../seed';


class ProductList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: Seed.products,
      counter: 0,
    };

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    console.log('construtor called');
  }

  componentDidMount() {
    setInterval(this.incrementCounter, 1000);
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  handleProductUpVote(productId) {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }

  render() {
    const products = this.state.products.sort((a,b) => (
      b.votes - a.votes
    ));

    const productComponents = products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));

    return (
      <div className="ui unstackable items">
        {productComponents}
        Counter {this.state.counter}
      </div>
    );
  }
}
 export default ProductList;
