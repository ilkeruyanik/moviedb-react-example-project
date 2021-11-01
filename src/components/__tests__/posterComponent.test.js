import React from 'react';
import { shallow, mount } from '../../enzyme';

import Poster from '../posterComponent/poster';

describe('PosterComponent Test', () => {

  it('poster rendering', () => {
    const wrapper = shallow(<Poster poster_path='/w220_and_h330_face/57AIZGL3flQk4pGf0Ih5MKNcEC7.jpg' title='Venom Zehirli Öfke 2'/>);
    expect(wrapper.find('.thumb')).toHaveLength(1);
    const img = wrapper.find('img');
    expect(img).toHaveLength(1);
    expect(img.prop('src')).toEqual('https://image.tmdb.org/t/p/w220_and_h330_face/w220_and_h330_face/57AIZGL3flQk4pGf0Ih5MKNcEC7.jpg');
    expect(img.prop('alt')).toEqual('Venom Zehirli Öfke 2');
  });

});