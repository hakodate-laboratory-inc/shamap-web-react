import React from "react";
import { createMemoryHistory } from "history";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { expect } from "chai";
import Routes from "~/src/Routes";
import Top from "~/src/components/App";
import NotFound from "~/src/components/NotFound";

describe("Test routing", () => {
  it("Invalid path should redirect to 404", () => {
    const history = createMemoryHistory({ initialEntries: ["/random"] });
    const wrapper = mount(
      <Routes history={history} />
    );
    expect(wrapper.containsMatchingElement(<NotFound />)).to.be.true;
    expect(wrapper.containsMatchingElement(<Top />)).to.be.false;
  });

  it("/ should show Top", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const wrapper = mount(
      <Routes history={history} />
    );
    expect(wrapper.containsMatchingElement(<Top />)).to.be.true;
    expect(wrapper.containsMatchingElement(<NotFound />)).to.be.false
  });
});
