import React from 'react';

const ImageGallery = (props) => {
  return (
    <div className='gallery-container'>
    {props.images.map((link, i)=> {
      return (
      <div className="thumbnail" key={i} onClick={()=> props.thumbNailClick(i)}>
        <img src={link} alt="shoes"></img>
      </div>
      )
    })}
    </div>
  )
}

export default ImageGallery;