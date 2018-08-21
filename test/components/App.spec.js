import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import App from "~/src/components/App";

describe("Component <App />", () => {
  it("render App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(
      <h1 className="App-title">Welcome to React</h1>
    )).to.be.true;
  });
});
