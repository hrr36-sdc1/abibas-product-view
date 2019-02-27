import React from 'react';

const CurrentImage = (props) => {
  return (
    <div className="current-container">
      <div className="left-arrow" onClick={props.leftArrowClick}>
        <span className="glyphicon glyphicon-chevron-left"></span>
      </div>
      <div className="right-arrow" onClick={props.rightArrowClick}>
        <span className="glyphicon glyphicon-chevron-right"></span>
      </div>
      <img src={props.image} alt="ultraboost" onClick={props.showCarousel}></img>
    </div>
  )
}

export default CurrentImage;