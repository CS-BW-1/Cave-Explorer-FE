import React from "react";
import { GlobalStyle } from "./AppStyles";
import Routes from "./routes/main_switch";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
