import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import BuildingDetail from "./components/BuildingDetail";
import buildings from './components/buildingsData';
import AccessibilityMenu from './components/AccessibilityMenu';

const itemData = buildings;


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/building/:buildingId" element={<BuildingDetail detailData={itemData} />} />
          <Route path="/accessibilitymenu" element={<AccessibilityMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
