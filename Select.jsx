import * as React from 'react';
import {
  Box,
  Paper,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider,
  TextField,
  Autocomplete
} from '@mui/material';


const top100Films = [
  { label: 'English'},
  { label: 'Franch' },
  { label: 'Arbic' },

];

export default function SelectMovieCard() {
  return (
    <Box sx={{ p:3, marginLeft:"350px",  marginTop:"200px"}}>
      <Card sx={{ minWidth: 275, maxWidth: 400 ,padding:"50px"}}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            Choose a Movie
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Autocomplete
            disablePortal
            options={top100Films}
            getOptionLabel={(option) => option.label}
            sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField {...params} label="Languag" variant="outlined" />
            )}
          />

        </CardContent>

        <CardActions>
        <Button variant="contained" sx={{width:"400px", margin:"10px"}}>submit</Button>
        </CardActions>
        <Typography variant='h6' component="div" sx={{marginLeft:"20px"}}>Selected:</Typography>
      </Card>
    </Box>
  );
}
