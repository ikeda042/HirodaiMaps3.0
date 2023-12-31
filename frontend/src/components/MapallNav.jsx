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
import checkpoints from './CheckpointData';

const CustomBottomNavigationAction = styled(BottomNavigationAction)((theme) => ({
  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  borderLeft: '1px solid rgba(0, 0, 0, 0.12)', 
  '&.Mui-selected': {
    color: '#005e3c', 
    backgroundColor: '#f0f0f0', 
  }
}));

function MapalllNav(props) {
  const [value, setValue] = useState("Home");
  const navigate = useNavigate();
  const getQridFromQueryParam = param => new URLSearchParams(window.location.search).get(param);
  const QRID = getQridFromQueryParam("qrid");
  const QRID_lat = checkpoints.find((item) => item.checkpointId === QRID).lat;
  const QRID_lon = checkpoints.find((item) => item.checkpointId === QRID).lon;

  
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
        <CustomBottomNavigationAction component={Link} 
        to={"/?qrid="+props.qrid} label="建物リスト" value={"search"} icon={<BusinessIcon />} />
     <CustomBottomNavigationAction component={Link} 
        to={`/mapall?lat=${QRID_lat}&lon=${QRID_lon}&qrid=${props.qrid}`} label="現在地" value={"currLoc"} icon={<MyLocationIcon />}/>
      {/* <CustomBottomNavigationAction label="バリアフリー経路" value={"accessibility"} icon={<AccessibleIcon />} /> */}
      <CustomBottomNavigationAction component={Link} 
        to={`/mapall?lat=${props.lat}&lon=${QRID_lat}&qrid=${QRID_lon}`} label="バリアフリー経路" value={"accessibility"} icon={<AccessibleIcon />} />
    </BottomNavigation>
  );
}

export default MapalllNav;