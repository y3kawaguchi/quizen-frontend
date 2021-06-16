import { storiesOf } from "@storybook/react";
import React from "react";
import DetailsScreen from "../src/templates/DetailsScreen";
import ErrorScreen from "../src/templates/ErrorScreen";
import ListScreen from "../src/templates/ListScreen";
import LoadingScreen from "../src/templates/LoadingScreen";
import NoResultScreen from "../src/templates/NoResultScreen";
import RegisterScreen from "../src/templates/RegisterScreen";
import TopScreen from "../src/templates/TopScreen";

storiesOf("templates", module)
  .add("DetailsScreen", () => <DetailsScreen />)
  .add("ErrorScreen", () => <ErrorScreen />)
  .add("ListScreen", () => <ListScreen />)
  .add("LoadingScreen", () => <LoadingScreen />)
  .add("NoResultScreen", () => <NoResultScreen />)
  .add("RegisterScreen", () => <RegisterScreen />)
  .add("TopScreen", () => <TopScreen />);
