import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let comp;
  beforeEach(() => {
    comp = setUp();
  });

  it("It should render without erros", () => {
    const wrapper = findByTestAttr(comp, 'headerComponent')
    expect(wrapper.length).toBe(1);
  });

  it("It should render a logo", () => {
    const logo = findByTestAttr(comp, 'logoIMG')
    expect(logo.length).toBe(1);
  });
});
