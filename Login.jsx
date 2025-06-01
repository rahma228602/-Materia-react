import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import Box from '@mui/material/Box';


export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        width: "500px",
        marginLeft: "350px",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          width: 500,
          borderRadius: 3,
          border: "1px solid #ccc",
        }}
      >
        <h1>Log In</h1>
        <TextField label="UserName" sx={{ m: 2, width: "90%" }} />
        <br />
        <TextField
          label="Password"
          type="password"
          sx={{ m: 2, width: "90%" }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
          sx={{ m: 2 }}
        />
        <br />
        <Button variant="contained" sx={{ m: 2, width: "94%" }}>
          Log In
        </Button>
        <Box s={{marginLeft:"100px"}}>
         <Link href= "#"  sx={{marginLeft:"150px"}}>Forget password?</Link>
        </Box>
        
      </Paper>
    </div>
  );
}
