import React from 'react';
import { shallow, mount } from '../../enzyme';

import Score from '../scoreComponent/score';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

describe('ScoreComponent Test', () => {

  it('red score rendering', () => {

    const style = buildStyles({
        textSize: '32px',
        pathColor: '#F4004F',
        textColor: '#fff',
        trailColor: '#620031',
        backgroundColor: '#000',
    })

    const wrapper = shallow(<Score value='20'/>);
    const circular = wrapper.find(CircularProgressbar);
    expect(circular).toHaveLength(1);
    expect(circular.prop('styles')).toEqual(style);

  });

  it('yellow score rendering', () => {

    const style = buildStyles({
        textSize: '32px',
        pathColor: '#d2d531',
        textColor: '#fff',
        trailColor: '#423d0f',
        backgroundColor: '#000',
    })

    const wrapper = shallow(<Score value='50'/>);
    const circular = wrapper.find(CircularProgressbar);
    expect(circular).toHaveLength(1);
    expect(circular.prop('styles')).toEqual(style);


  });

  it('green score rendering', () => {

    const style = buildStyles({
        textSize: '32px',
        pathColor: '#21d07a',
        textColor: '#fff',
        trailColor: '#204529',
        backgroundColor: '#000',
    })

    const wrapper = shallow(<Score value='80'/>);
    const circular = wrapper.find(CircularProgressbar);
    expect(circular).toHaveLength(1);
    expect(circular.prop('styles')).toEqual(style);


  });


});