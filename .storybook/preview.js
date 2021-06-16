import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { theme } from "../src/App";
import createStore from "../src/redux/store";

const store = createStore({});

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </MuiThemeProvider>
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
