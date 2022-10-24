// Libraries
import { ReactElement } from "react";
import { fireEvent, render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// State
import { reducers } from "../state/store";

const renderWithStore = (children: ReactElement, state?: object) => {
  const store = configureStore({ reducer: reducers, preloadedState: state });
  const helpers = render(<Provider store={store}>{children}</Provider>);
  return {
    ...helpers,
    store,
  };
};

const createStore = (state?: object) =>
  configureStore({ reducer: reducers, preloadedState: state });

export { fireEvent, render, createStore, renderWithStore };
