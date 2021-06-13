import { BrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "layout";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#081f2c',
    },
    secondary: {
      main: '#00a9ce'}
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
