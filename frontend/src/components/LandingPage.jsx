import ButtonAppBar from "./Navbar";
import SearchBar from "./Searchbar";
import BuildingCard from "./BuildingCard";
import React from 'react';

function LandingPage(props) {
  return (
    <div className="App">
      <ButtonAppBar headerText={props.headerText}/>
      <SearchBar />
      <BuildingCard
        buildingId={'1'}
        title="総合科学部棟"
        description="総合科学部の講義室がある棟です。"
        imageUrl="building_images/building1.png"
      />
       <BuildingCard
        buildingId={'2'}
        title="工学部第3類A4棟"
        description="工学部第３類の講義室、研究室がある棟です。"
        imageUrl="building_images/building2.png"
      />
       <BuildingCard
        buildingId={'3'}
        title="先端物質科学研究科"
        description="統合生命科学研究科の講義室、研究室がある棟です。"
        imageUrl="building_images/building3.png"
      />
       <BuildingCard
        buildingId={'4'}
        title="教育学部K棟"
        description="教育学部の講義室がある棟です。"
        imageUrl="building_images/building4.png"
      />
       <BuildingCard
        buildingId={'5'}
        title="文学部棟"
        description="文学部の講義室がある棟です。"
        imageUrl="building_images/building5.png"
      />
    </div>
  );
}

export default LandingPage;
