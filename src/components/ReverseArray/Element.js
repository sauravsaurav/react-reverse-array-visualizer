import React , { useState } from 'react';
import classes from './Element.module.css'
const Element = (props)=>{
    const [hoverState , setHoverState] = useState(false);
    const [isInput , setIsInput] = useState(false);
    // const [inputValue , setInputValue] = useState(props.)
    const setHoverOff = ()=>{
        setHoverState(false);
    }
    const setHoverOn = ()=>{
        setHoverState(true);
    }

    const switchInput = ()=>{
        setIsInput(!isInput);
    }

    const setToNoInput = ()=>{
        setIsInput(false);
    }


    const changeHandler = (e)=>{
        props.updateElement(e.target.value , e.target.getAttribute('index'));
    }


    return (
    <React.Fragment>
        {!isInput && <div onClick={switchInput} onMouseOut={setHoverOff} onMouseOver={setHoverOn} className={`${classes.eachElement} ${props.isProcessing ? classes.processIndicator : ''} ${hoverState ? classes.elementHover : classes.notHover} ${props.isProcessing ? classes.processing : ''}`} style={{ transition:"width .3s ease-out", width:props.width} }>
            {props.value}
            {(!isInput && props.isProcessing) && <span className={classes.indicator} style={{ display:'block' , width:props.width }}>🡩</span>}
        </div>}
        {isInput && <input type="text" autofocus className={classes.inputElement} style={{ width:props.width}} onDoubleClick={setToNoInput} value={props.value} onChange={changeHandler} index={props.index}/>}
    </React.Fragment>);
}

export default Element;