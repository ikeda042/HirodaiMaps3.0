import ButtonAppBar from "./Navbar";
import SearchBar from "./Searchbar";
import BuildingCard from "./BuildingCard";
import BottomNav from "./BottomNavigation";
import React, { useState, useEffect } from 'react';
import buildings from './buildingsData';
import { useNavigate } from 'react-router-dom';
import checkpoints from "./CheckpointData";

function LandingPage(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBuildings, setFilteredBuildings] = useState([]);
  const appBarHeight = '55px'; 
  const searchBarHeight = '70px';
  const navigate = useNavigate();
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
 
  const getQridFromQueryParam = param => new URLSearchParams(window.location.search).get(param);
  const QRID = getQridFromQueryParam("qrid");
  const checkpointID = QRID ? QRID : "0";
  const lat_query = checkpoints.find((item) => item.checkpointId === checkpointID).lat;
  const lon_query = checkpoints.find((item) => item.checkpointId === checkpointID).lon;

  console.log(lat_query);
  console.log(lon_query);
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

 
  return (
    <div className="App">
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <ButtonAppBar headerText={props.headerText} checkpointID={checkpointID}/>
      </div>
      <div style={{ position: 'fixed', top: appBarHeight, left: 0, right: 0, zIndex: 99, backgroundColor: 'white', }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div style={{ marginTop: `calc(${appBarHeight} + ${searchBarHeight})`, marginBottom:"60px" }}>
        {filteredBuildings.map(building => (
          <BuildingCard
            key={building.buildingId}
            buildingId={building.buildingId}
            title={building.title}
            description={building.description }
            imageUrl={building.imageUrl}
            QRID={checkpointID}
          />
        ))}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000}}> {/* ここでBottomNavを固定 */}
      <BottomNav QRID={checkpointID} lat = {lat_query} lon = {lon_query} title = {checkpointID}/>
    </div>
    </div>
  </div>
  );
}

export default LandingPage;
