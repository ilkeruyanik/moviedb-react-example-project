import React, { Component } from 'react';
import Movie from '../movieComponent/movie';
import './slider.css';

export default class Slider extends Component {

    render() {

        const moviesItem = this.props.movies.map((movie) => 
            <div key={movie.id} className='slide-item'>
                <Movie movie_data={movie}/>
            </div>
        );

        return (
            <div className='slider'>
                {moviesItem}
            </div>
        );
    }
}
