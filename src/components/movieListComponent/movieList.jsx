import React, { Component } from 'react'
import Slider from '../sliderComponent/slider'
import Tab from '../tabComponent/tab'
import './movieList.css'

export default class MovieList extends Component {

    

    render() {
        return (
            <div>
                <Tab menu_items={this.props.menu_items} name={this.props.name}/>
                <div className='slider-container'>
                    <Slider/>
                </div>
            </div>
        )
    }
}
