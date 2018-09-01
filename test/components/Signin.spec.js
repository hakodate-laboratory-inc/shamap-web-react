import React from "react";
import { stub } from "sinon";
import { mount } from "enzyme";
import { expect } from "chai";
import { PureSignin as Signin } from "~/src/components/Signin";

describe("Component <Signin />", () => {
  it("Submit event when click submit", () => {
    const submitForm = stub(Signin.prototype, "submitForm").returns(true);
    const wrapper = mount(<Signin />);
    wrapper.find("button[type='submit']").simulate("submit");
    expect(submitForm.called).to.be.true;
    submitForm.restore();
  });
});
