import Thumb from '../thumbComponent/thumb';
import './poster.css'

export default function Poster(props){
    return (
        <div className='image'>
            <div className='thumb'>
                <Thumb/>
            </div>
            <img src={'https://image.tmdb.org/t/p/w220_and_h330_face'+props.poster_path} alt={props.title} loading='lazy'/>
        </div>
    );
}
