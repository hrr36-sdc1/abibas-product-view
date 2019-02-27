import React from 'react';
import StarRatings from 'react-star-ratings';


const ProductInfo = (props) => {
  return (
    <div className="product-info-container">
      <div className="star-review-container">
        <StarRatings
          rating={props.currentProduct ? props.currentProduct.avg_stars : 0 }
          starRatedColor='black'
          numberOfStars={5}
          name='rating'
          starDimension='16px'
          starSpacing='2px'
          />
        <span className="review-link"><u>Read all {props.currentProduct ? props.currentProduct.review_count : 0} reviews</u></span>
      </div>
      <div>
        <span className="category"> {props.currentProduct ? props.currentProduct.type : null}</span>
        <h1 className="model">{props.currentProduct ? props.currentProduct.model : null}</h1>
        <span className="price">${props.currentProduct ? props.currentProduct.price: null}</span>
      </div>
    </div>
  )
}

export default ProductInfo;