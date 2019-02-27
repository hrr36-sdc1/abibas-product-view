import React from 'react';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  this.onRightClick = this.onRightClick.bind(this);
  this.onLeftClick = this.onLeftClick.bind(this);
  }

  onRightClick() {
    if (this.state.current < this.props.images.length - 1 ) {
      let index = this.state.current + 1;
      this.setState({current: index});
    }
  }
  onLeftClick() {
    if (this.state.current > 0) {
      let index = this.state.current - 1;
      this.setState({current: index});
    }
  }
  render() {
    return (
      <div className="carousel-container">
        <div className="left-arrow" onClick={this.onLeftClick}>
          <span className="glyphicon glyphicon-chevron-left"></span>
        </div>
        <div className="right-arrow" onClick={this.onRightClick}>
          <span className="glyphicon glyphicon-chevron-right"></span>
        </div>
        <img className="carousel-current" src={this.props.images[this.state.current]} alt="ultraboost"></img>
        <div className="exit-container" onClick={this.props.onExitClick}> X </div>
      </div>
    )
  }
}

export default ImageCarousel;