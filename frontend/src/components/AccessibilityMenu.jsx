import React from 'react';
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ButtonAppBar from './Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BottomNav from './BottomNavigation';
import { useNavigate } from 'react-router-dom';

function AccessibilityMenu({ props }) {
const navigate = useNavigate();
  const getQridFromQueryParam = param => new URLSearchParams(window.location.search).get(param);
  const QRID = getQridFromQueryParam("qrid");
  const checkpointID = QRID ? QRID : "0";
  return (
    <div>
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      <ButtonAppBar checkpointID={checkpointID}/>
    </div>
    <BottomNav />
  </div>
  );
}

export default AccessibilityMenu;
