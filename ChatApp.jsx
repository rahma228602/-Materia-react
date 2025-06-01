import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';


export default function ChatApp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          borderRadius: 3,
          border: "1px solid #ccc",
          padding: "50px",
          marginTop: "200px",
          marginLeft: "350px",
        }}
      >
        <Typography variant="h3" component="h3" sx={{ padding: "10px" }}>
          Chat with Ahmed
        </Typography>
        <Divider />

        <Stack direction="row" spacing={1} sx={{ marginTop: "20px" }}>
          <AccountCircleIcon />
          <Typography variant="h6" component="h6">
            Ahmed
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ color: "gray", marginBottom: "100px" }}
          >
            Hello!
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <AccountCircleIcon />
          <Typography variant="h6" component="h6">
            You
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ color: "gray", marginBottom: "100px" }}
          >
            How are you ?
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
         <TextField
      id="outlined-basic"
      placeholder="Type a message..."
     
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AddReactionIcon />
           
          </InputAdornment>
        ),
      }}
    />
          <Button variant="contained" endIcon={<SendIcon />}></Button>
        </Stack>

      </Paper>
    </div>
  );
}
