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
import BottomNav from './BottomNavigation ';

function BuildingDetail({ detailData }) {
  const { buildingId } = useParams();
  const buildingDetail = detailData.find((item) => item.buildingId === buildingId);;
  //get value from url query parameter
  const getQridFromQueryParam = param => new URLSearchParams(window.location.search).get(param);
  const QRID = getQridFromQueryParam("qrid");
  const checkpointID = QRID ? QRID : "0";
  if (!buildingDetail) {
    return <div>詳細情報が見つかりません。</div>;
  }

  return (
    <div>
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      <ButtonAppBar />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '17%' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`/${buildingDetail.imageUrl}?w=200&h=200&fit=crop&auto=format`}
            alt={buildingDetail.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {buildingDetail.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is {buildingDetail.title + QRID + "/map/map.html"+buildingDetail.mapCoordinate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <iframe
        id="mapIframe"
        src={"/map/map.html"+buildingDetail.mapCoordinate}
        style={{ height: '300px', width: '300px', border: '2px solid black', marginTop: '20px', marginBottom: '50px' }} // 枠とマージンを追加
        title="Map"
      ></iframe>
    </div>
    {/* <BottomNav /> */}
  </div>
  );
}

export default BuildingDetail;
