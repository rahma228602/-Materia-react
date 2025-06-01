import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import Divider from '@mui/material/Divider';


import routineImage from "../assets/Routine for a more organized life.jfif";

export default function MultiActionAreaCard() {
  const [value, setValue] = useState(3);

  return (
     
    <Card sx={{ maxWidth: 345 ,marginLeft:"400px" ,marginTop:"200px",width:"1000px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={routineImage}
          alt="green iguana"
          
        />
     
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Wireless Headphones
          </Typography>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
       
        </CardContent>
      </CardActionArea>
        <Button variant="contained" sx={{width:"300px", textAlign:"center", margin:"20px"}}>Contained</Button>
      <CardActions>
           <Typography component="legend">$99.99</Typography>
              

      </CardActions>
         <Divider  />
       <Button variant="contained" sx={{width:"300px", textAlign:"center", margin:"20px",background:"green"}}>Contained</Button>

    </Card>
  );
}
