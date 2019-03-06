import React from 'react';
import ImageGallery from './image-gallery.jsx';
import CurrentImage from './current-image.jsx';

class Images extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentImage: 0,
    }
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onThumbNailClick = this.onThumbNailClick.bind(this);
  }

  onLeftArrowClick(){
    if (this.state.currentImage > 0) {
      let index = this.state.currentImage - 1;
      this.setState({currentImage: index})
    }
  }

  onRightArrowClick(){
    if (this.state.currentImage < this.props.images.length - 1) {
      let index = this.state.currentImage + 1;
      this.setState({currentImage: index})
    }
  }

  onThumbNailClick(index){
    this.setState({currentImage: index})
  }

  render() {
    return (
      <div className="image-container">
        <ImageGallery images={this.props.images} thumbNailClick={this.onThumbNailClick}/>
        <CurrentImage image={this.props.images[this.state.currentImage]} leftArrowClick={this.onLeftArrowClick} rightArrowClick={this.onRightArrowClick} showCarousel={this.props.showCarousel}/>
      </div>
    )
  }
}

export default Images;