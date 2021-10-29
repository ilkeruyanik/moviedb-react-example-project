import React, { Suspense } from 'react';
import Score from '../scoreComponent/score';
import './movie.css'
const Poster = React.lazy(() => import('../posterComponent/poster'));

export default function Movie(props){

    const movie_data = props.movie_data;

    let movie_name = movie_data.title;
    if(movie_name===undefined){
        movie_name = movie_data.name;
    }

    let release_date = movie_data.release_date;
    if(release_date===undefined){
        release_date = movie_data.first_air_date;
    }

    return (
        <div className='movie'>
            <Suspense fallback={<div>yükleniyor...</div>}>
                <Poster poster_path={movie_data.poster_path} title={movie_data.title}/>
            </Suspense>
            <div className='content'>
                <div className='score'>
                    <Score value={movie_data.vote_average*10}/>
                </div>
                <h2>{movie_name}</h2>
                <p>{release_date}</p>
            </div>
        </div>
    );
}