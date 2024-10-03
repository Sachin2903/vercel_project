import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './SLetter.module.css';

const SLetter = (props) =>{

    const [ orientation, setOrientation ] = useState("");
    const [ twist, setTwist ] = useState("");
    const firstRender = useRef(true);

    const turnHandler = useCallback( () => {
        if(window.innerWidth/window.innerHeight < 1){
            return;
        }
        if( (orientation === "" || orientation === styles.orientUp) && props.dropped ){
            setOrientation(styles.orientDown);
            setTwist("");
        }
        else if(orientation === styles.orientDown && !props.dropped ){
            
            setOrientation(styles.orientUp);
        }
       
    },[props.dropped, orientation] )

    useEffect(
        () => {
            turnHandler();
        }, [props.dropped, turnHandler]
    );


    const twistHandler = useCallback(function(){
        let twistCount = 0;
        if(orientation === "" || orientation === styles.orientUp){
            if(window.innerWidth < 1279 && window.innerWidth/window.innerHeight <= 1){
                if(twist === "" || twist === styles.twist3){
                    setOrientation("");
                    setTwist(styles.twist1);
                    twistCount = 1;
                    props.sTwistHandler(twistCount);
                    return;
                }
            
            }
            
            if(twist === "" || twist === styles.twist5){
                setOrientation("");
                setTwist(styles.twist1);
                twistCount = 1;
            }
        
            else if(twist === styles.twist1){
                setTwist(styles.twist2);
                twistCount = 2;
            }
            else if( twist === styles.twist2 ){
                setTwist(styles.twist3);
                twistCount = 3;
            }
            else if( twist === styles.twist3 ){
                setTwist(styles.twist4);
                twistCount = 4;
            }
            else if( twist === styles.twist4 ){
                setTwist(styles.twist5);
                twistCount = 0;
            }
        }

        props.sTwistHandler(twistCount);
    },[props.clicked]  );

    useEffect(
        () =>{
           if(firstRender.current){
               firstRender.current = false;
               return;
           }
           twistHandler();
        }, [props.clicked, twistHandler]
    );

    return(
            <span className={[styles.letterS, orientation, twist].join(" ")} >S</span>
    );
}

export default SLetter;