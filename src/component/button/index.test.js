import React from "react";
import {findByTestAttr, checkProps} from "../../../Utils";
import SharedButton from "./index";
import {shallow} from "enzyme";

describe('SharedButton Component',()=>{
    describe('checking PropTypes', ()=> {
        it('should not throw a warning', ()=>{
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: ()=>{

                }
            };
            const propsErros = checkProps(SharedButton , expectedProps)
            expect(propsErros).toBeUndefined();
        })
    });

    describe('renders ', ()=> {
        let wrapper;
        beforeEach(()=> {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: ()=>{

                }
            }
            wrapper = shallow(<SharedButton {...props} />)
        })
        it('Should render a button ', ()=> {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    })
})