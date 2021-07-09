import { React, useState } from "react";
import CardInformation from "../data/ProductCardInformation.js";
import "../App.css";
import Cards from "../components/Cards.js";
import FilterProducts from "../components/FilterProducts.js";

function Products() {
  const cards = CardInformation;
  /*Selected product type is updated by the product filter - false represents the placeholder value*/
  const [selectedProductType, setSelectedProductType] = useState(false);
  /*Product name search is updated by the product filter*/
  const [productNameSearch, setProductNameSearch] = useState();
  /*Creating a copy of the initial cards to filter - the filter should always be applied to the original card information*/
  const [filteredCards, setFilteredCards] = useState(cards);

  function handleSelectedProductType(productType) {
    setSelectedProductType(productType);
    var copyCards = cards;
    const filteredCopyCards = copyCards.filter(function (card) {
      return card.type === productType;
    });
    /*Check whether the placeholder has been selected - if so, set the filtered cards to original cards, otherwise to the filtered copy*/
    productType === "false"
      ? setFilteredCards(cards)
      : setFilteredCards(filteredCopyCards);
  }

  function handleProductSearch(searchString) {
    setProductNameSearch(searchString);
    /*If there are no values in the filtered cards, use the original card set, otherwise apply the text filter on top of the filtered card set*/
    var copyCards = !filteredCards.length ? cards : filteredCards;
    const filteredCopyCards = copyCards.filter(function (card) {
        /*Ensure the search is case in-sensitive*/
      return card.product.toLowerCase().includes(searchString.toLowerCase());
    });
    /*If the search string is empty, return the original card search, otherwise apply the filtered set*/
    searchString === ""
      ? setFilteredCards(cards)
      : setFilteredCards(filteredCopyCards);
  }
  return (
    <>
      <FilterProducts
        filterType={selectedProductType}
        filterName={productNameSearch}
        updateProduct={handleSelectedProductType}
        handleProductSearch={handleProductSearch}
      />
      <Cards cards={filteredCards} />
    </>
  );
}

export default Products;
