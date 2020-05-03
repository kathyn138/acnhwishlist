import React from 'react';
import { mount } from 'enzyme';
import App from './App';


it('can render the correct component', function () {
  let wrapper = mount(<App />);

  expect(wrapper.html()).toContain("Search for your favorite villager or click on any of the personality categories to get started!");
});