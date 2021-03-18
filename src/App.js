// import React, { Component} from "react";
// import {hot} from "react-hot-loader";
// import "./App.css";

// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <h1> Hello, World! </h1>
//       </div>
//     );
//   }
// }

// export default hot(module)(App);

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import List from "./components/List";
import Details from "./components/Details";
import Error from "./components/Error";

const App = () => {
  return (
    // BrowserRouterコンポーネントは、画面遷移の際、ヒストリー API に履歴情報を追加してくれる
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* Link コンポーネントで画面遷移するリンクを作成。to でリンク URL を指定。後に a タグへ変換されるようになっており、外部リンクも指定可能 */}
              <Link to="/">ホーム画面</Link>
            </li>
            <li>
              <Link to="/list">一覧画面</Link>
            </li>
            <li>
              <Link to="/details">詳細画面</Link>
            </li>
            <li>
              <Link to="/undefined">実在しない画面へのリンク</Link>
            </li>
          </ul>
        </nav>

        {/* URL ごとのレンダリング内容の定義。exactを付けると完全一致、付けないと完全一致で比較せず、path が/aboutの場合、/about/aなどでも一致とみなされる */}
        <Switch>
          <Route path="/list" exact>
            <List />
          </Route>
          <Route path="/details" exact>
            <Details />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* 定義していないURLにアクセスされた場合のレンダリング内容を指定したい場合は、path を指定しない Route を最後に記述しておくことで対応可能 */}
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
