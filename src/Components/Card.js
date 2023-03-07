import React from "react";
import './Card.css'
const Card = (props) => {
    const {title,price} = props;
  return (
    <div>
      <div class="card">
        <div class="card-body p-3 pt-5">
          <h4 class="card-title">{title}</h4>
          <h6 class="card-title mt-4">{price}</h6>
          <h6 class="card-subtitle mb-4 text-muted">Instead of $10.99/yr</h6>
          
          <a href="#" class="card-link w-100 btn btn-outline-primary">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
