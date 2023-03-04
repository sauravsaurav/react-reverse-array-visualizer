import React, { useEffect, useState } from "react";
import classes from "./ArrayContainer.module.css";
import Element from "./Element";
const ArrayContainer = ()=>{
    useEffect(()=>{
        setTimeout(()=>{
            setTransitionClass(true);
        },620);
    },[]);

    const [transitionClass , setTransitionClass] = useState(false);
    const [processing,setProcessing] = useState(false);
    const [arrayQuantity , setArrayQuantity]  = useState([
        {id : 1 , value:1 , isProcessing : false},
    ]);
    const rangeChangeHandler = (event)=>{
        if(processing) return false;
        setArrayQuantity(prevState=>{
            let temp = [];
            for(let i = 1 ; i <= event.target.value ; i++){
                temp.push({id : i , value:i , isProcessing : false});
            }
            return temp;
        })
    }

    const updateHandler = (value,index)=>{
        if(processing) return false;
        setArrayQuantity(prevState=>{
            let newState = [...prevState];
            newState[index].value = (value);
            return newState;
        })
    }


    const reverseArray = ()=>{
        if(processing) return false;
        setProcessing(true);
    }

    useEffect(()=>{
        if(processing === true){
            let startIndex = 0 , endIndex = arrayQuantity.length - 1 , timer = 1;
            while(startIndex < endIndex){
                ((startIndex , endIndex , timer)=>{
                    if(startIndex+1 === endIndex || startIndex+2 === endIndex){
                        setTimeout(()=>{
                            setProcessing(false);
                        },timer+800)
                    }
                    setTimeout(function(){
                        let newState = [...arrayQuantity];
                        (newState[startIndex].isProcessing = true);
                        (newState[endIndex].isProcessing = true);
                        setArrayQuantity(newState);
                    },timer-800)
                    setTimeout(function(){
                        let newState = [...arrayQuantity];
                        let startValue = parseInt(newState[startIndex].value);
                        let endValue   = parseInt(newState[endIndex].value);
                        startValue += endValue;
                        endValue    = startValue - endValue;
                        startValue  = startValue - endValue
                        newState[startIndex].value = startValue;
                        newState[endIndex].value = endValue;
                        newState[startIndex].isProcessing = false;
                        newState[endIndex].isProcessing = false;
                        setArrayQuantity(newState);
                    },timer);
                })(startIndex,endIndex, timer*1500 );
                startIndex++;
                endIndex--;
                timer++;
            }
        }
    },[processing])


    return (
        <div className={`${classes.container} ${transitionClass ? classes.backgroundTransition : ''}`}>
            <div className={classes.inputRangeContainer}>
                <span className={`${classes.indicator} ${classes.leftIndicator}`}>👈🏼</span>
                <input type="range" min={1} max={10} value={arrayQuantity.length} className={classes.slider} onChange={rangeChangeHandler}/>
                <span className={`${classes.indicator} ${classes.rightIndicator}`}>👉🏼</span>
                <span className={`${classes.low} ${classes.rangeNumbers}`}>1</span>
                <span className={`${classes.mid} ${classes.rangeNumbers}`}>5</span>
                <span className={`${classes.high} ${classes.rangeNumbers}`}>10</span>
            </div>
            <div className={classes.showSelectedRange}>Selected Quantity : {arrayQuantity.length}</div>
            <div className={classes.listContainer}>
               {
                arrayQuantity.map((eachElement,index) => <Element updateElement={updateHandler} width={`${parseInt((1/arrayQuantity.length) *100)}%`} value={eachElement.value} key={eachElement.id} index={index} isProcessing={eachElement.isProcessing}/>)
               }
            </div>
            <div className={classes.buttonContainer}>
                <button onClick={reverseArray}>Reverse</button>
            </div>
            <div className={classes.pending}>
                <h3>Pending / How to</h3>
               <ul>
                    <li>There should be a tips button (PENDING)</li>
                    <li>You can change value , by clicking (single click) after providing the value click again to confirm(double click)</li>
                    <li>The boxes should come back to default box shape , when clicking on reverse button </li>
                    <li>The application can be more responsive</li>
               </ul>
            </div>
            {processing && <div className={classes.snackbar}>Please wait while processing...</div>}
        </div>
    )
}


export default ArrayContainer;