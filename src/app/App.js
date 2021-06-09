import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
export default App;
