import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import DeleteIcon from "@mui/icons-material/Delete";
import Login from "./Compontant/Login";
import ChatApp from "./Compontant/ChatApp";
import ImgCard from "./Compontant/ImgCard";
import Select from "./Compontant/Select";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <ChatApp />
      <ImgCard />
      <Select />
    </>
  );
}

export default App;
