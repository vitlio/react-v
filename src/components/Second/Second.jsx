import React, { useState } from 'react';
import './Second.css'

const Second = props => {

    let [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let [sliderIMGPosition, setSliderIMGPosition] = useState(0);
    let handlerClickLeft = () => {
        if(sliderIMGPosition === 0){
            setSliderIMGPosition(-(item.length-1) * 100)
        } else {
            setSliderIMGPosition(sliderIMGPosition += 100)
        }
        console.log(sliderIMGPosition);
    }
    let handlerClickRight = () => {
        if(sliderIMGPosition === -(item.length - 1) * 100){
            setSliderIMGPosition(0)
        } else {
            setSliderIMGPosition(sliderIMGPosition -= 100)
        }
        console.log(sliderIMGPosition);
    }
    return(
        <React.Fragment>    
            <div className="wrap-div" >
                <button className="slider-btn-left" onClick={handlerClickLeft}>{'<'}</button>
                <button className="slider-btn-right" onClick={handlerClickRight}>{'>'}</button>
                <div className="track" style={{width: item.length*100 + '%', left: sliderIMGPosition + '%'}}>
    
                        {item.map((i, idx) => (
                                <div key={idx} className="one">{i}</div>
                        )) }
                </div>
            </div>
        </React.Fragment>
        );
    
}

export default Second;