import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { PureSignin as Signin } from "~/src/components/Signin";

describe("Component <Signin />", () => {
  it("Submit event when click submit", async () => {
    const wrapper = mount(<Signin />);
    const button = wrapper.find("input[type='submit']")
    await expect(button.length).to.equal(1);
  });
});
