import './score.css'

export default function Score(props){

    
    let trackColor = '#423d0f';
    let barColor = '#d2d531';

    if (props.value >= 70){
        trackColor = '#204529';
        barColor = '#21d07a';
    }

    return (
    <div className='ring'>
        <div className='outer_ring' style={{borderColor:barColor}} >
            <div className='inner_ring' >
                <div className='percent'>
                    <span>{props.value}<sup>%</sup></span>
                </div>
            </div>
        </div>
    </div>
    );


    
}