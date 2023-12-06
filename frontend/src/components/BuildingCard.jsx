import { Link } from 'react-router-dom';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function BuildingCard({ title, description, imageUrl, buildingId, QRID}) {

  return (
    <Link to={`/building/${buildingId}/?=${QRID}`} style={{ textDecoration: 'none',color: 'inherit', fontFamily: 'Arial'}}>
       <div style={{ margin: '0 1%' }}> 
      <Card sx={{  width: '100%', 
  height: "90px", 
  display: 'flex', 
  alignItems: 'center',
  margin: '0.5% auto', 
  borderRadius: "10px" }}>
        <CardMedia
           component="img"
           sx={{ 
            width: 100, 
            height: 75, 
            padding: '2%', 
            borderRadius: '15px',
            alignSelf: 'center' ,
            borderRadius: "20%" }}
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
