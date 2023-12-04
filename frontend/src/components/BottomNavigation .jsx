import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import TranslateIcon from '@mui/icons-material/Translate';
import { Link } from 'react-router-dom';
// スタイルのカスタマイズ
const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  borderRight: '1px solid rgba(0, 0, 0, 0.12)', // 右側に境界線を追加
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
      style={{ width: '100%', position: 'fixed', bottom: 0 }}
    >
        <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
      <StyledBottomNavigationAction label="検索" icon={<SearchIcon />} />
      <BottomNavigationAction label="言語" icon={<TranslateIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;