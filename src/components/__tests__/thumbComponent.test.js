import React from 'react';
import { shallow, mount } from '../../enzyme';

import Thumb from '../thumbComponent/thumb';

describe('ThumbComponent Test', () => {

  it('renders thumb buttons', () => {
    const wrapper = shallow(<Thumb />);

    expect(wrapper.find('.thumb-btn')).toHaveLength(2);
    expect(wrapper.find('.bi-hand-thumbs-up')).toHaveLength(1);
    expect(wrapper.find('.bi-hand-thumbs-down')).toHaveLength(1);
    expect(wrapper.find('.bi-hand-thumbs-up-fill')).toHaveLength(0);
    expect(wrapper.find('.bi-hand-thumbs-down-fill')).toHaveLength(0);
  });

  it('thumbUp click', () => {
    const wrapper = mount(<Thumb/>);
    wrapper.find('.bi-hand-thumbs-up').simulate('click');
    expect(wrapper.find('.bi-hand-thumbs-up-fill')).toHaveLength(1);
    expect(wrapper.find('.bi-hand-thumbs-up')).toHaveLength(0);
    expect(wrapper.find('.bi-hand-thumbs-down').parent().prop('style')).toHaveProperty('display', 'none');
    wrapper.find('.bi-hand-thumbs-up-fill').simulate('click');
    expect(wrapper.find('.bi-hand-thumbs-up')).toHaveLength(1);
    expect(wrapper.find('.bi-hand-thumbs-up-fill')).toHaveLength(0);
  });

  it('thumbDown click', () => {
    const wrapper = mount(<Thumb/>);
    wrapper.find('.bi-hand-thumbs-down').simulate('click');
    expect(wrapper.find('.bi-hand-thumbs-down-fill')).toHaveLength(1);
    expect(wrapper.find('.bi-hand-thumbs-down')).toHaveLength(0);
    expect(wrapper.find('.bi-hand-thumbs-up').parent().prop('style')).toHaveProperty('display', 'none');
    wrapper.find('.bi-hand-thumbs-down-fill').simulate('click');
    expect(wrapper.find('.bi-hand-thumbs-down')).toHaveLength(1);
    expect(wrapper.find('.bi-hand-thumbs-down-fill')).toHaveLength(0);
  });

});