import { connectRouter, routerMiddleware } from "connected-react-router";
import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from "redux";
import quizen from "./";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      quizen: quizen,
      router: connectRouter(history),
    }),
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
}
