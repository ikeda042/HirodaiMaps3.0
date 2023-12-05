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


const CustomBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  borderLeft: '1px solid rgba(0, 0, 0, 0.12)', 
  '&.Mui-selected': {
    color: '#005e3c', 
    backgroundColor: '#f0f0f0', 
  }
}));

function BottomNav() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{ 
        width: '100%', 
        position: 'fixed', 
        bottom: 0,
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
        <CustomBottomNavigationAction label="ホーム" icon={<HomeIcon />}/>
      <CustomBottomNavigationAction label="バリアフリー" icon={<AccessibleIcon />} />
      <CustomBottomNavigationAction label="言語/Langage" icon={<TranslateIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;