import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import quizenSaga from "./redux/sagas";
import createStore, { sagaMiddleware } from "./redux/store";

const history = createBrowserHistory();
const store = createStore(history);

sagaMiddleware.run(quizenSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
