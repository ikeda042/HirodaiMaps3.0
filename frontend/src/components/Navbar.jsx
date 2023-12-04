import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function ButtonAppBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#005e3c' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
              },
            }}
          >
            {/* メニューアイテムをここに追加 */}
            <MenuItem onClick={handleClose}>学部</MenuItem>
            <MenuItem onClick={handleClose}>研究室</MenuItem>
            <MenuItem onClick={handleClose}>お知らせ</MenuItem>

          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none',color: 'inherit', fontFamily: 'Arial'}}>
            Hirodai Maps 3.0 {props.headerText}
            </Link>
          </Typography>
          <Button color="inherit" href='https://www.hiroshima-u.ac.jp/'>広島大学</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
