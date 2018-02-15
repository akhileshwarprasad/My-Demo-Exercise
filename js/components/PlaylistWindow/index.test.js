import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import getStore from "../../store";

import PlaylistWindow from "./index";
const media = {
  addEventListener: jest.fn(),
  setVolume: jest.fn(),
  setBalance: jest.fn(),
  _analyser: null
};

describe("PlaylistWindow", () => {
  let store;
  beforeEach(() => {
    store = getStore(media);
  });

  it("renders to snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PlaylistWindow />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
