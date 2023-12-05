import ButtonAppBar from "./Navbar";
import SearchBar from "./Searchbar";
import BuildingCard from "./BuildingCard";
import BottomNav from "./BottomNavigation ";
import React, { useState, useEffect } from 'react';
import buildings from './buildingsData';

function LandingPage(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBuildings, setFilteredBuildings] = useState([]);
  
  useEffect(() => {
    let filtered;
    if (searchQuery) {
      filtered = buildings.filter(building =>
        building.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      filtered = buildings.filter(building => building.tag === "faculty");
    }
    setFilteredBuildings(filtered);
  }, [searchQuery]); 

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const appBarHeight = '55px'; 
  const searchBarHeight = '70px';

  return (
    <div className="App">
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <ButtonAppBar headerText={props.headerText}/>
      </div>
      <div style={{ position: 'fixed', top: appBarHeight, left: 0, right: 0, zIndex: 99, backgroundColor: 'white', }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div style={{ marginTop: `calc(${appBarHeight} + ${searchBarHeight})` }}>
        {filteredBuildings.map(building => (
          <BuildingCard
            key={building.buildingId}
            buildingId={building.buildingId}
            title={building.title}
            description={building.description}
            imageUrl={building.imageUrl}
          />
        ))}
      {/* <BottomNav /> */}
    </div>
  </div>
  );
}

export default LandingPage;
