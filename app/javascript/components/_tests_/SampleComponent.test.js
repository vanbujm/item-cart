import React from 'react';
import SampleComponent from '../SampleComponent';
import {shallow} from 'enzyme';

test('SampleComponent renders', () => {
    const component = shallow(
        <SampleComponent/>
    );
    expect(component.html()).toMatchSnapshot();
});