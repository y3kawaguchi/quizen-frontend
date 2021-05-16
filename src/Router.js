import React from "react";
import { Route, Switch } from "react-router-dom";
import { Details, Error, ListScreen, RegisterScreen, Top } from "./templates";

const Router = () => {
  return (
    // URL ごとのレンダリング内容の定義。exactを付けると完全一致、付けないと完全一致で比較せず、path が/aboutの場合、/about/aなどでも一致とみなされる
    <Switch>
      <Route exact path="/list">
        <ListScreen />
      </Route>
      <Route path="/details/:detailsId">
        <Details />
      </Route>
      <Route exact path="/register">
        <RegisterScreen />
      </Route>
      <Route exact path="(/)?">
        <Top />
      </Route>
      {/* 定義していないURLにアクセスされた場合のレンダリング内容を指定したい場合は、path を指定しない Route を最後に記述しておくことで対応可能 */}
      <Route>
        <Error />
      </Route>
    </Switch>
  );
};

export default Router;
