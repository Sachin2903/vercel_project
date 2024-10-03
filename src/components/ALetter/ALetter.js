import React, { useEffect, useState, useCallback } from 'react';
import styles from './ALetter.module.css';

const ALetter = (props) =>{

    const [orientation, setOrientation] = useState("");

    

    const turnHandler = useCallback( function(){
        if(window.innerWidth/window.innerHeight < 1){
            if(props.clicked === 1){
                setOrientation(styles.minify);
            }
            else if(props.clicked === 2){
                setOrientation(styles.magnify);
            }
            return;
        }
        if((orientation === "" || orientation === styles.unturned) && props.clicked){
            setOrientation(styles.turned);
        }
        else if(orientation === styles.turned && !props.clicked ){
            setOrientation(styles.unturned);
        }
        
        }, [props.clicked, orientation]
    );

    useEffect(
        () =>{
            turnHandler();
        }, [props.clicked, turnHandler]
    );

    return(
        <span className={[styles.letterA, orientation].join(" ")} >A</span>
    );
}

export default ALetter;