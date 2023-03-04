import classes from "./Overlay.module.css";
const Overlay = (props)=>{
    const hideOverlay = ()=>{
        props.onHideModal();
    }
    return <div className={classes.overlay} onClick={hideOverlay}></div>
}

export default Overlay;