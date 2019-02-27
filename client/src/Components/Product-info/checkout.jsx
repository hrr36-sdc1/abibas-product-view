import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Checkout = (props) => {
  let sizes = props.currentProduct ? props.currentProduct.sizes.split(',') : [];
  return (
    <div className="checkout-container">
      <div className="size-helper">
        <i className="glyphicon glyphicon-th"></i>
        <span><u>Size Chart</u></span>
      </div>
      <div className="row">
        <Dropdown className="dropdown-table">
          <Dropdown.Toggle id="dropdown-table">
          Select Size
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {sizes.map((size) => {
              return (
                <Dropdown.Item>{size}</Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdown-size">
          <Dropdown.Toggle>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {sizes.map((size) => {
              return (
                <Dropdown.Item>{size}</Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row">
        <div className="bag-button"><span>ADD TO BAG</span> <i className="glyphicon glyphicon-arrow-right"></i></div>
        <div className="heart"><i className="glyphicon glyphicon-heart"></i></div>
      </div>
      <div className="row shipping">
        <div className="container">
          <i className="glyphicon glyphicon-plane"></i>
          <span><u>FREE SHIPPING AND FREE RETURNS</u></span>
        </div>
      </div>
    </div>
  )
}

export default Checkout;