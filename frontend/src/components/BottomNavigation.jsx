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

const CustomBottomNavigationAction = styled(BottomNavigationAction)((theme) => ({
  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  borderLeft: '1px solid rgba(0, 0, 0, 0.12)', 
  '&.Mui-selected': {
    color: '#005e3c', 
    backgroundColor: '#f0f0f0', 
  }
}));

function BottomNav(props) {
  const [value, setValue] = useState("Home");
  const navigate = useNavigate();
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // switch(newValue) {
    //   case "home":
    //     navigate('/'+`?qrid=${props.QRID}`); 
    //     break;
    //   case "accessibility":
    //     navigate('/accessibilitymenu/'+`?qrid=${props.QRID}`); 
    //     break;
    //   case "language":
    //     navigate('/building1/'+`?qrid=${props.QRID}`); 
    //     break;
    //   default:
    //     navigate('/'+`?qrid=${props.QRID}`); 
    //     break;
    // }
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
        <CustomBottomNavigationAction label="交通機関" value={"search"} icon={<DepartureBoardIcon />} />
        <CustomBottomNavigationAction label="現在地" value={"currLoc"} icon={<MyLocationIcon />}/>
      <CustomBottomNavigationAction label="バリアフリー" value={"accessibility"} icon={<AccessibleIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;