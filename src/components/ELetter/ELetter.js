import React, { useEffect, useState } from 'react';
import styles from './ELetter.module.css';

const ELetter = (props) =>{

    const [ orientation, setOrientation ] = useState("d");

    useEffect(
        () => {
            turnHandler();
        }, [props.dropped, props.clicked]
    );

    function turnHandler(){
        if(window.innerWidth/window.innerHeight < 1){
            if(props.clicked === 1){
                setOrientation(styles.slideOut);
            }
            else if(props.clicked === 2){
                setOrientation(styles.slideIn);
            }

            return;
        }
        
        if( (orientation === "d" || orientation === styles.orientUp) && props.dropped ){
            setOrientation(styles.orientDown);
        }
        else if(orientation === styles.orientDown && !props.dropped ){
            setOrientation(styles.orientUp);
        }
       
    }

    return(
            <span className={[styles.letterE, orientation].join(" ")} >E</span>
    );
}

export default ELetter;