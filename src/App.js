// import {hot} from "react-hot-loader";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import Error from "./components/Error";
import BodyFrame from "./components/frames/BodyFrame";
import MainFrame from "./components/frames/MainFrame";
import Header from "./components/Header";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import ListScreen from "./containers/ListScreen";

const App = () => {
  return (
    // BrowserRouterコンポーネントは、画面遷移の際、ヒストリー API に履歴情報を追加してくれる
    <Router>
      <Header />
      <BodyFrame>
        <SideBar />
        <MainFrame>
          {/* URL ごとのレンダリング内容の定義。exactを付けると完全一致、付けないと完全一致で比較せず、path が/aboutの場合、/about/aなどでも一致とみなされる */}
          <Switch>
            <Route path="/list" exact>
              <ListScreen />
            </Route>
            <Route path="/details/:detailsId">
              <Details choices={["選択肢1", "選択肢2", "選択肢3", "選択肢4"]} />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            {/* 定義していないURLにアクセスされた場合のレンダリング内容を指定したい場合は、path を指定しない Route を最後に記述しておくことで対応可能 */}
            <Route>
              <Error />
            </Route>
          </Switch>
        </MainFrame>
      </BodyFrame>
    </Router>
  );
};

// export default hot(module)(App);
export default App;
