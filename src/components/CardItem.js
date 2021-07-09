import { React, useState } from "react";
import "./CardItem.css";
import ExpandInfoButton from "./ExpandInfoButton";
import StarRating from "./StarRating.js";

function CardItem(props) {
  const [showInfo, setShowInfo] = useState(false);

  const expandInformation = () => {
    setShowInfo(!showInfo);
  };

  return (
    <li className="card-item-wrap">
      <figure className="card-item-img-wrap">
        <img src={props.src} className="card-item-img" alt="ts_2.jpeg" />
      </figure>
      <h4 className='card-item-product-text'>{props.product}</h4>
      <StarRating rating={props.rating} />
      <ExpandInfoButton showInfo={showInfo} handleClick={expandInformation} />
      <p>{showInfo ? props.productInformation : ''}</p>
    </li>
  );
}

export default CardItem;
