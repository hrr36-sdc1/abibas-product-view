/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import Images from './product-view/images';
import InfoSection from './Product-info/info';
import ImageCarousel from './product-view/image-carousel';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      images: [],
      otherImages: [],
      view: false,
    };
    this.onRelatedClick = this.onRelatedClick.bind(this);
    this.onExitClick = this.onExitClick.bind(this);
    this.onCarouselClick = this.onCarouselClick.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  onRelatedClick(i) {
    const { products } = this.state;
    const images = products[i].links.split('***');
    const otherImages = products.map(product => product.links.split('***'));
    this.setState({
      images,
      otherImages,
    });
  }

  onExitClick() {
    this.setState({ view: false });
  }

  onCarouselClick() {
    this.setState({ view: true });
  }

  getProduct() {
    axios.all([
      axios.get(`/products/${11562700}`),
      axios.get(`/products/${11214058}`),
      axios.get(`/products/${10857618}`),
    ])
      .then((res) => {
        const products = res.map(response => JSON.parse(response.data));
        const images = products[0].links.split('***');
        const otherImages = products.map(product => product.links.split('***'));
        this.setState({
          products,
          images,
          otherImages,
        });
      })
      .catch(err => console.log(err, 'failed retrieving products'));
  }

  renderImageCarousel() {
    if (this.state.view) {
      return <ImageCarousel images={this.state.images} onExitClick={this.onExitClick} />;
    }
  }

  render() {
    const { images, products, otherImages } = this.state;
    return (
      <div className="main-component">
        <div>
          {this.renderImageCarousel()}
        </div>
        <div className="center">
          <Images images={images} showCarousel={this.onCarouselClick} />
          <InfoSection products={products} otherImages={otherImages} onRelatedClick={this.onRelatedClick} />
        </div>
      </div>
    );
  }
}

export default Main;
