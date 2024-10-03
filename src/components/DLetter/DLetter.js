import React, { useState, useRef } from 'react';
import styles from './DLetter.module.css';

const DLetter = (props) =>{

    const [ direction, setDirection ] = useState("");
    const [ fontSize, setFontSize ] = useState("");
    const refContainer = useRef(null);

    function turnHandler(){

        if(direction === "" || direction === styles.turnNormal){
            setDirection(styles.turnLeft);
        }

        else if(direction === styles.turnLeft){
            setDirection(styles.turnRight)
        }
        else if(direction === styles.turnRight){
            setDirection(styles.turnNormal);
        }
    }
      

    return(
        <div className={[styles.container, ( props.fade === true ? styles.fade : "")].join(" ")} ref={refContainer} onClick={turnHandler} >
            <span className={[styles.letterD, direction].join(" ")} style={{ fontSize: fontSize }}  >D</span>
        </div>
    );
}

export default DLetter;