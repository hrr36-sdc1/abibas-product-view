import React from 'react';
import $ from 'jquery';
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
    this.getImages = this.getImages.bind(this);
    this.onRelatedClick = this.onRelatedClick.bind(this);
    this.onExitClick = this.onExitClick.bind(this);
    this.onCarouselClick = this.onCarouselClick.bind(this);
  }

  componentDidMount() {
    this.getProduct('UltraBoost All Terrain Shoes');
  }

  onRelatedClick(i) {
    this.getImages(this.state.products[i].image_id, (data) => { this.setState({ images: data }); });
  }

  onExitClick() {
    this.setState({ view: false });
  }

  onCarouselClick() {
    this.setState({ view: true });
  }

  getProduct(model) {
    $.ajax({
      type: 'GET',
      url: '/products',
      data: { model },
      contentType: 'application/json',
      error: (err) => { console.log(err, 'failed retrieving products'); },
      success: (data) => {
        this.setState({
          products: data,
        });
        this.getImages(data[0].image_id, (data) => { this.setState({ images: data }); });
        this.updateOtherImages(data);
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getImages(id, callback) {
    $.ajax({
      type: 'GET',
      url: '/images',
      data: { image_id: id },
      contentType: 'application/json',
      success: (data) => { callback(data); },
      error: (err) => { console.log('error'); },
    });
  }

  updateOtherImages(data) {
    for (let i = 0; i < data.length; i++) {
      // let temp = this.state.otherImages;
      this.getImages(data[i].image_id, (images) => {
        const current = this.state.otherImages;
        current.push(images[0]);
        this.setState({ otherImages: current });
      });
    }
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
