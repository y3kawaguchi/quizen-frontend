// import {hot} from "react-hot-loader";
import { blue, green } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import BodyFrame from "./components/frames/BodyFrame";
import MainFrame from "./components/frames/MainFrame";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Router from "./Router";

export const theme = createMuiTheme({
  mixins: {
    toolbar: {
      // Lower the height of the header
      minHeight: 42,
    },
  },
  palette: {
    primary: {
      main: green["700"],
    },
    secondary: {
      main: blue["A700"],
    },
    background: {
      default: "#fff",
    },
  },
  props: {
    MuiCheckbox: {
      color: "secondary",
    },
    MuiList: {
      dense: true,
    },
    MuiRadio: {
      color: "secondary",
    },
    MuiSwitch: {
      color: "secondary",
    },
    MuiTable: {
      size: "small",
    },
    MuiTextField: {
      variant: "outlined",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 14,
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      {/* BrowserRouterコンポーネントは、画面遷移の際、ヒストリー API に履歴情報を追加してくれる */}
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <BodyFrame>
          <SideBar />
          <MainFrame>
            <Router />
          </MainFrame>
        </BodyFrame>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

// export default hot(module)(App);
export default App;
