import Thumb from '../thumbComponent/thumb';
import './poster.css'

export default function Poster(props){
    return (
        <div className='image'>
            <div className='thumb'>
                <Thumb/>
            </div>
            <img src={props.poster_path} alt={props.title} loading='lazy'/>
        </div>
    );
}
