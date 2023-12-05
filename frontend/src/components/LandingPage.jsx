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
  return (
    <div className="App">
        <ButtonAppBar headerText={props.headerText}/>
      <SearchBar onSearch={handleSearch} />
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
  );
}

export default LandingPage;
