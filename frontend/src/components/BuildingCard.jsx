import { Link } from 'react-router-dom';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function BuildingCard({ title, description, imageUrl, buildingId}) {// 例: 'building1.png' => '1'

  return (
    <Link to={`/building/${buildingId}`}>
       <div style={{ margin: '0 1%' }}> {/* 左右のマージンを1%に設定 */}
      <Card sx={{ width: '100%', display: 'flex',  margin: '0.1% auto'  }}>
        <CardMedia
          component="img"
          sx={{ width: 100, height: 100 }}  
          image={imageUrl}
          alt="Building Image"
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
    </Link>
  );
}

export default BuildingCard;
