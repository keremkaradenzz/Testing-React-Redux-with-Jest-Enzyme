import React from "react";
import ListItem from "./index";
import {shallow} from "enzyme";
import {findByTestAttr, checkProps} from "../../../Utils";

describe('Listitem component', () => {
    describe('checking proptypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                title: 'Test',
                desc: 'Example Description'
            }
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        })
    });
    describe('Component Renders', () => {
        let wrapper;
        beforeEach(()=>{
            const props ={
                title: 'Test',
                desc: 'Example Description'
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        it('should render  without error', () => {
            const comp = findByTestAttr(wrapper, 'listItem');
            expect(comp.length).toBe(1);
        })
        it('should render a title', ()=> {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })
        it('should render a desc', ()=> {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        })
    })
})