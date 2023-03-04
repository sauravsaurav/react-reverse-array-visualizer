import React , {useState} from "react";
import classes from "./Modal.module.css"
import Overlay from "./Overlay";


const Modal = (props)=>{
    //useState(localStorage.getItem("showModal") === 'true' ? true : false);
    const [showModal , setShowModal] = useState(true);
    const closeModal = ()=>{
        setShowModal(false);
        setTimeout(function(){props.onToggleModal()},500);
    }

    const dontShowHandler = (e)=>{
        console.log(e.target.getAttribute("checked"));
    }
    return (
        <React.Fragment>
            <div className={`${classes.modal} ${showModal ? classes.showModal : classes.hideModal}`}>
                <button onClick={closeModal} className={classes.cross}>x</button>
                <div className={classes.modalDetails}>
                    <h2>What and how ?</h2>
                    <p>
                        This is the visualization for the reversing the array. The approach is using 
                        2 pointers. One pointer starts from the 0th index and other one is startng 
                        from the (N-1)th index.
                    </p>
                    <h4>Below are the points to keep in mind : </h4>
                    <ul>
                        <li>You can't add more then 10 array elements (because of the responsiveness).</li>
                        <li>Please wait while the reverse is in progress.</li>
                        <li>You can populate the array , by clicking the auto populate button ( check/click ?)</li>
                        <li>You can avoid this annoying pop up to appear again by checking the below checkbox (This task is pending due to laziness)</li>
                    </ul>
                    <label><input type="checkbox" onClick={dontShowHandler}/> <b>Don't show me this popup again</b>(pending)</label>
                    <button className={classes.closeButton} onClick={closeModal}>Close</button>
                </div>
            </div>
            {showModal && <Overlay onHideModal={closeModal}/>}
        </React.Fragment>
    );
}


export default Modal;