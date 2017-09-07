import React, { Component } from 'react';

class Product extends Component {

  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {

    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} alt=""/>
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a href="" onClick={this.handleUpVote}>
              <i className="large caret up icon"></i>
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img src={this.props.submitterAvatarUrl} alt="" className="ui avatar image"/>
          </div>
        </div>
      </div>
    );
  }
}
 export default Product;
