import { Link } from 'react-router-dom';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function BuildingCard({ title, description, imageUrl, buildingId}) {

  return (
    <Link to={`/building/${buildingId}`} style={{ textDecoration: 'none',color: 'inherit', fontFamily: 'Arial'}}>
       <div style={{ margin: '0 1%' }}> {/* 左右のマージンを1%に設定 */}
      <Card sx={{ width: '100%', height: "90px", display: 'flex',  margin: '0.5% auto', borderRadius: "10px" }}>
        <CardMedia
           component="img"
           sx={{ width: 100, height: 75, padding: '2%', borderRadius: '15px' }}
           image={imageUrl.split('.')[0]+"_thumbnail."+imageUrl.split('.')[1]}
           alt="Building Image"
        />
        <CardContent sx={{ flex: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%' 
          }}
        >
          {title}
        </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {description}
          </Typography> */}
        </CardContent>
      </Card>
    </div>
    </Link>
  );
}

export default BuildingCard;
