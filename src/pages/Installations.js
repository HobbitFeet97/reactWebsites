import { React, useState } from "react";
import Cards from "../components/Cards.js";
import FilterProducts from "../components/FilterProducts.js";
import Installations from "../data/MyInstallationsInformation.js";

function MyInstallations() {
  const InstallationData = Installations;

  const [filteredInstallations, setFilteredInstallations] =
    useState(InstallationData);
  const [installedProductName, setInstalledProductName] = useState();
  const [installedProductType, setInstalledProductType] = useState(false);

  const filterProductByName = (searchName) => {
    setInstalledProductName(searchName);
    var copyInstallations = !filteredInstallations.length ? InstallationData : filteredInstallations;
    const filteredProducts = copyInstallations.filter(function (
      installation
    ) {
      return installation.product
        .toLowerCase()
        .includes(searchName.toLowerCase());
    });
    searchName === ""
      ? setFilteredInstallations(InstallationData)
      : setFilteredInstallations(filteredProducts);
  };

  const filterProductByType = (searchType) => {
    setInstalledProductType(searchType);
    var copyInstallations = !filteredInstallations.length ? InstallationData : filteredInstallations;
    const filteredProducts = copyInstallations.filter(function (
      installation
    ) {
      return installation.type === searchType;
    });
    searchType === "false"
      ? setFilteredInstallations(InstallationData)
      : setFilteredInstallations(filteredProducts);
  };

  return (
    <>
      <FilterProducts
        filterType={installedProductType}
        filterName={installedProductName}
        updateProduct={filterProductByType}
        handleProductSearch={filterProductByName}
        isInstallations={true}
      />
      <Cards cards={filteredInstallations} />
    </>
  );
}

export default MyInstallations;
