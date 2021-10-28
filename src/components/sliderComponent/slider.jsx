import React, { Component } from 'react';
import Movie from '../movieComponent/movie';
import './slider.css';

export default class Slider extends Component {

    render() {

        const movies = [
            {   
                id: 1,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 2,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 3,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 4,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 5,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 6,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {   
                id: 7,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 8,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 9,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 10,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 11,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 12,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {   
                id: 13,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 14,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 15,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 16,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 17,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 18,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {   
                id: 19,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 20,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 21,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 22,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 23,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            },
            {
                id: 24,
                poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
                title: 'The Good Doctor',
                score: 89,
                release_date: '09-09-2021'
            }
        ];

        const moviesItem = movies.map((movie) => 
            <div key={movie.id} class='slide-item'>
                <Movie movie_data={movie}/>
            </div>
        );
        
        console.log(moviesItem)

        return (
            <div className='slider'>
                {moviesItem}
            </div>
        );
    }
}
