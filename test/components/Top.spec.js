import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Top from "~/src/components/Top";

describe("Component <Top />", () => {
  it("render Top", () => {
    const wrapper = shallow(<Top />);
    expect(wrapper.contains(
      <h1 className="App-title">Welcome to React</h1>
    )).to.be.true;
  });
});
