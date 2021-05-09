// import {hot} from "react-hot-loader";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import BodyFrame from "./components/frames/BodyFrame";
import MainFrame from "./components/frames/MainFrame";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Router from "./Router";

const App = () => {
  return (
    // BrowserRouterコンポーネントは、画面遷移の際、ヒストリー API に履歴情報を追加してくれる
    <BrowserRouter>
      <Header />
      <BodyFrame>
        <SideBar />
        <MainFrame>
          <Router />
        </MainFrame>
      </BodyFrame>
    </BrowserRouter>
  );
};

// export default hot(module)(App);
export default App;
