import React, { Component } from 'react';

class Product extends Component {
  render() {

    return (
      <div className="item">
        <div className="image">
          <img src="images/products/image-aqua.png" alt=""/>
        </div>
        <div className="middle aligned content">
          <div className="description">
            <a href="">Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img src="images/avatars/daniel.jpg" alt="" className="ui avatar image"/>
          </div>
        </div>
      </div>
    );
  }
}
 export default Product;