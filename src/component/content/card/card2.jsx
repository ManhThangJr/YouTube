import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaControlCard({title,channel,img}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex',width:'80%', boxShadow:'none',borderRadius:'10px',height:'100px' }}>
      <CardMedia
        component="img"
        sx={{ maxWidth:'151px' }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" sx={{fontSize:'90%',fontWeight:'bolder',color:'#383838'}}>
           {title}
          </Typography>
          <Typography sx={{fontSize:'80%'}} color="text.secondary" component="div">
           {channel}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}