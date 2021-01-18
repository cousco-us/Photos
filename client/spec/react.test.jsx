import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import GalleryPreview from '../src/components/galleryPreview';
import App from '../src/components/app';

describe('App', () => {
  it('renders initial loading screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('fetched async home data on mount', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div .content').length).toEqual(0);
    setTimeout(() => {
      expect(wrapper.find('div .content').length).toEqual(1);
      done();
    }, 0);
  });
});
