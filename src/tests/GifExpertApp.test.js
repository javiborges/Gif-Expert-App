import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe hacer match con el Snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar una lista de categorías', () => {
        const categories = ['One Punch', 'Naruto'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
        
    })
    
})
