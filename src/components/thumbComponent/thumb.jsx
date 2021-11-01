import React, { useState } from 'react';
import './thumb.css';

export default function Thumb(){

    const [thumbUp, setthumbUp] = useState(false);
    const [thumbDown, setthumbDown] = useState(false);

    let thumbUpStyle = {display: 'inline-block'};
    let thumbDownStyle = {display: 'inline-block'};
    let thumbUpIcon = 'bi bi-hand-thumbs-up';
    let thumbDownIcon = 'bi bi-hand-thumbs-down';

    if(thumbUp){
        thumbUpIcon = 'bi bi-hand-thumbs-up-fill';
        thumbDownStyle = {display: 'none'};
    }

    if(thumbDown){
        thumbDownIcon = 'bi bi-hand-thumbs-down-fill';
        thumbUpStyle = {display: 'none'};
    }

    return (
        <div>
            <span onClick={()=>{setthumbUp(!thumbUp)}} className='thumb-btn' style={thumbUpStyle}>
                <i className={thumbUpIcon}/>
            </span>
            <span onClick={()=>{setthumbDown(!thumbDown)}} className='thumb-btn' style={thumbDownStyle}>
                <i className={thumbDownIcon}/>
            </span>
        </div>
    );
}