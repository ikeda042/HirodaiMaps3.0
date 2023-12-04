import ButtonAppBar from "./Navbar";
import SearchBar from "./Searchbar";
import BuildingCard from "./BuildingCard";
import React, { useState, useEffect } from 'react';

function LandingPage(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBuildings, setFilteredBuildings] = useState([]);
  const buildings = [
    {
      buildingId: '1',
      title: '総合科学部棟',
      description: '総合科学部の講義室がある棟です。',
      imageUrl: 'building_images/building1.png',
      keywords: ['総合科学部', '総合科学部棟', '総合科学部講義室','そうかとう'],
    },
    {
      buildingId: '2',
      title: '工学部第3類A4棟',
      description: '工学部第３類の講義室、研究室がある棟です。',
      imageUrl: 'building_images/building2.png',
      keywords: ['工学部', '工学部第3類', '工学部第3類A4棟', '工学部講義室'],
    },
    {
      buildingId: '3',
      title: '先端物質科学研究科',
      description: '統合生命科学研究科の講義室、研究室がある棟です。',
      imageUrl: 'building_images/building3.png',
      keywords: ['統合生命科学研究科', '先端物質科学研究科', '先端物質科学研究科講義室'],
    },
    {
      buildingId: '4',
      title: '教育学部K棟',
      description: '教育学部の講義室がある棟です。',
      imageUrl: 'building_images/building4.png',
      keywords: ['教育学部', '教育学部K棟', '教育学部講義室'],
    },
    {
      buildingId: '5',
      title: '文学部棟',
      description: '文学部の講義室がある棟です。',
      imageUrl: 'building_images/building5.png',
      keywords: ['文学部', '文学部棟', '文学部講義室', 'ぶんがくぶ'],
    },
   
  ];

  useEffect(() => {
    const filtered = buildings.filter(building =>
      building.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
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
      {/* <ButtonAppBar headerText={props.headerText}/>
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
      /> */}
    </div>
  );
}

export default LandingPage;
