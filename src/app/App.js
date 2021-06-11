import { BrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "layout";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green } from '@material-ui/core/colors'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[800],
    },
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
