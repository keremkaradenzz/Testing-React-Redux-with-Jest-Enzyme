import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description",
      };
      wrapper = setUp(props);
    });
    it('should render without erros', () => {
        const component = findByTestAttr(wrapper, 'HeadlineComponent');
        expect(component.length).toBe(1);
    })
    it('should render a H1', () => {
        const h1 = findByTestAttr(wrapper, 'header');
        expect(h1.length).toBe(1);
    })
    it('should render a desc', () => {
        const desc = findByTestAttr(wrapper, 'desc');
        expect(desc.length).toBe(1);
    })
  });

  describe("Have not props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('should not render', ()=> {
        const component = findByTestAttr(wrapper, 'HeadlineComponent')
        expect(component.length).toBe(0);
    })
  });
});
