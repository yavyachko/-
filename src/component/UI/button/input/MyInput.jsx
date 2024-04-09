import React from "react";
import classes from './MyInput.module.css'
let MyInput = React.forwardRef((props, ref) =>{
    return(
        <input ref={ref} {...props} className={classes.myInput}></input>
    )
});
export default MyInput