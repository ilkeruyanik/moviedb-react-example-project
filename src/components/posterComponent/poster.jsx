import './poster.css'

export default function Poster(props){
    return (
        <div className='image'>
            <img src={props.poster_path} alt={props.title} loading='lazy'/>
        </div>
    );
}
