import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Post from "./views/PostDetails";
import Home from "./views/Home";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Noto Sans TC"', "sans-serif"],
    useNextVariants: true,
    fontWeight: "bold",
    color: "#264052",
  },
  palette: {
    primary: {
      main: "#f86152",
    },
  },
  textColor: "#264052",
  secondaryText: "#cad1d6",
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={Home} exact />
          <Route path="/post/:postId" component={Post} />
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
