import React from 'react';
import Image from 'react-bootstrap/Image';
import $ from 'jquery';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherImages: []
    }
  }

  // componentDidMount() {
  //   // if (this.state.otherImages.length === this.props.products.length) {
  //   //   this.updateImages();
  //   // }
  //   // console.log(this.state);
  //   // this.updateImages();
  // }

  updateImages() {
    let temp = [];
    for (let i = 0; i < this.props.products.length; i++) {
      temp.push(this.getImages(this.props.products[i].image_ID));
      if (temp.length === 3) {
        this.setState({
          otherImages: temp
        })
      }
    }
  }

  getImages(id) {
    $.ajax({
      type: 'GET',
      url: '/images',
      data: { imageID: id},
      contentType: 'application/json',
      success: (data)=> { return data[0];
      },
      error: (err) => {console.log('error')}
    })
  }

  render() {
    let colors = this.props.currentProduct ? this.props.currentProduct.colors.split(',') : [];
    return (
      <div className="related-container">
        <h5>Available Colors</h5>
        <ol>
          {colors.map((color, i) => {
            return (
              <li key={i}>{color} {i < colors.length -1? '/': ''}</li>
            )
          })}
        </ol>
        <div className="other-colors">
          {this.props.otherImages.map((image, i) => {
            return (
              <Image key={i} onClick={()=> {this.props.infoClick(i); this.props.onRelatedClick(i)}}className="other-thumbnail" src={image} roundedCircle />
            )
          })}
        </div>
      </div>
    )

  }
}

export default RelatedProducts;