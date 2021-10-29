import './score.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Score(props){

    
    let trackColor = '#423d0f';
    let barColor = '#d2d531';

    if (props.value >= 70){
        trackColor = '#204529';
        barColor = '#21d07a';
    }

    return (
        <div className='ring'>
            <CircularProgressbar value={props.value} text={props.value+'%'} background={true}
                styles={buildStyles({
                    textSize: '32px',
                    pathColor: barColor,
                    textColor: '#fff',
                    trailColor: trackColor,
                    backgroundColor: '#000',
                })}/>
            </div>
    );
}