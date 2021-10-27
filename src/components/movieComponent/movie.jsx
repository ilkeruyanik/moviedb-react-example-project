import React, { Component } from 'react'
import Poster from '../posterComponent/poster';
import Score from '../scoreComponent/score';
import './movie.css'

export default function Movie(props){

    const movie_data = props.movie_data;

    return (
        <div className='movie'>
            <Poster poster_path={movie_data.poster_path} title={movie_data.title}/>
            <div className='content'>
                <div className='score'>
                    <Score value='76'/>
                </div>
                <h2>{movie_data.title}</h2>
                <p>{movie_data.release_date}</p>
            </div>
        </div>
    );
}