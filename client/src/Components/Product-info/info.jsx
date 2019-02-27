import React from 'react';
import ProductInfo from './model-info.jsx';
import RelatedProducts from './related-products.jsx';
import Checkout from './checkout.jsx';


class InfoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
    this.onInfoClick = this.onInfoClick.bind(this);
  }

  onInfoClick(index) {
    this.setState({current: index});
  }

  render() {
    return (
      <div className="info-container">
        <ProductInfo currentProduct={this.props.products[this.state.current]}/>
        <RelatedProducts onRelatedClick={this.props.onRelatedClick} products={this.props.products} currentProduct={this.props.products[this.state.current]} otherImages={this.props.otherImages} infoClick={this.onInfoClick}/>
        <Checkout currentProduct={this.props.products[this.state.current]}/>
      </div>
    )
  }
}

export default InfoSection;