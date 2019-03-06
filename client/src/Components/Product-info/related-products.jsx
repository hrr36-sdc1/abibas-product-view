import React from 'react';
import Image from 'react-bootstrap/Image';

const RelatedProducts = (props) => {
  const colors = props.currentProduct ? props.currentProduct.colors.split(',') : [];
  return (
    <div className="related-container">
      <h5>Available Colors</h5>
      <ol>
        {colors.map((color, i) => (
          <li key={i}>
            {color}
            {' '}
            {i < colors.length - 1 ? '/' : ''}
          </li>
        ))}
      </ol>
      <div className="other-colors">
        {props.otherImages.map((image, i) => (
          <Image key={i} onClick={() => { props.infoClick(i); props.onRelatedClick(i); }} className="other-thumbnail" src={image[i]} roundedCircle />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
