import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import TranslateIcon from '@mui/icons-material/Translate';
import { Link } from 'react-router-dom';
import AccessibleIcon from '@mui/icons-material/Accessible';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import DirectionsIcon from '@mui/icons-material/Directions';
import BusinessIcon from '@mui/icons-material/Business';


const CustomBottomNavigationAction = styled(BottomNavigationAction)((theme) => ({
  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  borderLeft: '1px solid rgba(0, 0, 0, 0.12)', 
  '&.Mui-selected': {
    color: '#005e3c', 
    backgroundColor: '#f0f0f0', 
  }
}));

function BottomNavDetail(props) {
  const [value, setValue] = useState("Home");
  const navigate = useNavigate();
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      showLabels
      style={{ 
        width: '100%', 
        position: 'fixed', 
        bottom: 0,
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      }}
      onChange={handleChange}
    >
        {/* <CustomBottomNavigationAction label="ホーム" value={"home"} icon={<HomeIcon /> } /> */}
        <CustomBottomNavigationAction component={Link} 
        to={"/?qrid="+props.qrid} label="建物リスト" value={"search"} icon={<BusinessIcon />} />
        <CustomBottomNavigationAction label="経路案内を開始" value={"currLoc"} icon={<DirectionsIcon />}/>
      <CustomBottomNavigationAction label="バリアフリー経路" value={"accessibility"} icon={<AccessibleIcon />} />
    </BottomNavigation>
  );
}

export default BottomNavDetail;