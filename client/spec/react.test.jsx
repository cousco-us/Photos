import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import axios from 'axios';

import GalleryPreview from '../src/components/galleryPreview';
import App from '../src/components/app';

const sampleHome = {
  images: [
    'https://loremflickr.com/900/600/house?random=0',
    'https://loremflickr.com/900/600/house?random=1',
    'https://loremflickr.com/900/600/house?random=2',
    'https://loremflickr.com/900/600/house?random=3',
    'https://loremflickr.com/900/600/house?random=4',
    'https://loremflickr.com/900/600/house?random=5',
    'https://loremflickr.com/900/600/house?random=6',
    'https://loremflickr.com/900/600/house?random=7',
    'https://loremflickr.com/900/600/house?random=8',
    'https://loremflickr.com/900/600/house?random=9',
    'https://loremflickr.com/900/600/house?random=10',
  ],
  tags: [
    'New Construction',
  ],
  details: {
    address: {
      _id: '60022e8d39ee0a8615c3f45c',
      line1: '74204 Jessika Locks',
      line2: 'West Emeliafort, MS',
    },
    floorplan: {
      _id: '60022e8d39ee0a8615c3f45b',
      numBeds: 7,
      numBaths: 7,
      sqft: 7630,
    },
    _id: '60022e8d39ee0a8615c3f45a',
    price: 2067730,
  },
  saved: true,
  _id: '60022e8d39ee0a8615c3f457',
  __v: 0,
};

beforeAll(() => {
  global.fetch = jest.fn();
});

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders initial loading screen', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('renders content on mount', async () => {
    const spyDidMount = jest.spyOn(App.prototype, 'componentDidMount');
    fetch.mockImplementation(() => (
      Promise.resolve({
        status: 200,
        json: () => (
          Promise.resolve(sampleHome)
        ),
      })
    ));
    const didMount = wrapper.instance().componentDidMount();
    expect(spyDidMount).toHaveBeenCalled();
    didMount.then(() => {
      // updating the wrapper
      wrapper.update();
      expect(wrapper.find('div .content').length).toBe(1);
      expect(wrapper.find('h1').length).toBe(0);
      spyDidMount.mockRestore();
      fetch.mockClear();
      done();
    });
  });
});
// describe('Google', () => {
//   beforeAll(async () => {
//     await page.goto('https://google.com');
//   });

//   it('should be titled "Google"', async () => {
//     await expect(page.title()).resolves.toMatch('Google');
//   });
// });
// describe('GalleryPreview', () => {
//   it('renders content on mount', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('div .content').length).toEqual(0);
//     setTimeout(() => {
//       expect(wrapper.find('SampleImages').length).toEqual(1);
//       expect(wrapper.find('HomeDetails').length).toEqual(1);
//       expect(wrapper.find('HomeOptions').length).toEqual(1);
//       expect(wrapper.find('GallerySize').length).toEqual(1);
//       done();
//     }, 0);
//   });
// });

// describe('HomeInfo', () => {
//   it('renders content on mount', async () => {
//     const wrapper = shallow(<App />);
//     await wrapper.instance().componentDidMount();
//     await setTimeout(() => {
//       expect(wrapper.find('div .homeInfo').length).toEqual(1);
//     }, 0);
//     // setTimeout(() => {
//     //   expect(wrapper.find('div .homeInfo').length).toEqual(1);
//     //   expect(wrapper.find('div .address').length).toEqual(1);
//     //   expect(wrapper.find('span .floorplan').length).toEqual(1);
//     //   expect(wrapper.find('div .price').length).toEqual(0);
//     //   expect(false).toEqual(true);
//     //   done();
//     // }, 4000);
//   });
// });
