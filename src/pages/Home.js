import React from "react";
import '../App.css';
import Cards from "../components/Cards.js";
import LandingPage from "../components/LandingPage.js";
import HomeCardInformation from "../data/HomeCardInformation.js";

function Home() {
  const cards = HomeCardInformation;
  return (
    <>
      <LandingPage
        src="images/ts_2.jpeg"
        description="Look at these wonderful shutters"
      />
      <h2 className='product-intro-header'>Some of our bespoke products -</h2>
      <Cards cards={cards} />
    </>
  );
}

export default Home;
