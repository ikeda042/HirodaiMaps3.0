import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import BuildingDetail from "./components/BuildingDetail";

const itemData = [
  {
    img: 'building_images/building1.png',
    title: 'Building1',
  },
  {
    img: 'building_images/building2.png',
    title: 'Building2',
  },
  {
    img: 'building_images/building3.png',
    title: 'Building3',
  },
  {
    img: 'building_images/building4.png',
    title: 'Building4',
  },
  {
    img: 'building_images/building5.png',
    title: 'Building5',
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/building/:buildingId" element={<BuildingDetail detailData={itemData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
