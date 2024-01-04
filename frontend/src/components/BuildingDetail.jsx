import React from 'react';
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ButtonAppBar from './Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button} from '@mui/material';
import BottomNav from './BottomNavigation';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import NavigationIcon from '@mui/icons-material/Navigation';
import AccessibleIcon from '@mui/icons-material/Accessible';
import BottomNavDetailPage from './ButtomNavDetailPage';

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
  const lat_query = buildingDetail.lat;
  const lon_query = buildingDetail.lon;
  const title = buildingDetail.title;

  return (
    <div>
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      <ButtonAppBar headerText={detailData.headerText} checkpointID={checkpointID}/>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '17%' }}>
        <Card sx={{ maxWidth: 350, maxHeight: 290 }}> {/* maxHeightを追加 */}
          <CardActionArea>
            <CardMedia
              component="img"
              height="200" 
              image={`/${buildingDetail.imageUrl}?w=200&h=200&fit=crop&auto=format`}
              alt={buildingDetail.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {buildingDetail.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {buildingDetail.title + buildingDetail.buildingId}。
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      <iframe
        id="mapIframe"
        src={"/map/map.html"+ `?lat=${lat_query}&lon=${lon_query}&title=${title}`}
        style={{ height: '350px', width: '350px', border: '2px solid black', marginTop: '20px', marginBottom: '90px' }} 
        title="Map"
      ></iframe>
    </div>
    <BottomNavDetailPage qrid = {QRID} buildingId = {buildingDetail.buildingId}/>
  </div>
  );
}

export default BuildingDetail;



// <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px', marginTop:'-30px' }}>
// <Button 
//   variant="contained" 
//   endIcon={<DirectionsWalkIcon />}
//   style={{ backgroundColor: 'orange', margin: '0 10px' }}> {/* マージンを追加 */}
//   経路案内
// </Button>
// <Button 
//   variant="contained" 
//   endIcon={<AccessibleIcon />}
//   style={{ backgroundColor: '#0091E4', margin: '0 10px' }
//   }> {/* マージンを追加 */}

//   バリアフリー経路案内
// </Button>
// </div>