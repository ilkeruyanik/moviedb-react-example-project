import { useState } from 'react';
import Thumb from '../thumbComponent/thumb';
import './poster.css'

export default function Poster(props){

    const [load, setLoad] = useState(false);

    let style = {display: 'block'}; 
    if(load){
        style = {display: 'none'}; 
    }


    return (
        <div className='image'>
            <div className='thumb'>
                <Thumb/>
            </div>
            <div style={style}>
                yükleniyor...
            </div>
            <img onLoad={() => setLoad(true)} src={'https://image.tmdb.org/t/p/w220_and_h330_face'+props.poster_path} alt={props.title} loading='lazy'/>    
        </div>
    );
}
