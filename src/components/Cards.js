import React from "react";
import CardItem from "./CardItem.js";
import "./Cards.css";

function Cards(props) {
  return (
    <ul className="cards-wrapper">
      {props.cards.map((card, index) => {
        return (
          <CardItem
            key={index}
            src={card.src}
            product={card.product}
            rating={card.rating}
            productInformation={card.productInformation}
          />
        );
      })}
    </ul>
  );
}

export default Cards;
