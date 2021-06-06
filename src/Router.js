import React from "react";
import { Route, Switch } from "react-router-dom";
import { DetailsScreen, ErrorScreen, ListScreen, RegisterScreen, TopScreen } from "./templates";

const Router = () => {
  return (
    // URL ごとのレンダリング内容の定義。exactを付けると完全一致、付けないと完全一致で比較せず、path が/aboutの場合、/about/aなどでも一致とみなされる
    <Switch>
      <Route exact path="/list">
        <ListScreen />
      </Route>
      <Route path="/details/:detailsId">
        <DetailsScreen />
      </Route>
      <Route exact path="/register">
        <RegisterScreen />
      </Route>
      <Route exact path="(/)?">
        <TopScreen />
      </Route>
      {/* 定義していないURLにアクセスされた場合のレンダリング内容を指定したい場合は、path を指定しない Route を最後に記述しておくことで対応可能 */}
      <Route>
        <ErrorScreen />
      </Route>
    </Switch>
  );
};

export default Router;
