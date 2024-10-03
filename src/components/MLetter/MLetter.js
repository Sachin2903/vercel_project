import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from './MLetter.module.css';
import M0 from './M0';

const MLetter = (props) =>{

    const paths = [

        "M3843.271,190.3l36.645-215.863h55.54l43.23,115.089L4021.63-25.566h55.539L4113.815,190.3h-55.826L4039.38,66.047l-50.96,124.25h-22.33l-48.383-124.25L3899.1,190.3Z;" ,
        "M3843.271,190.3l36.645-215.863h55.54l43.23,115.089L4051.63-25.566h55.539L4173.815,190.3h-55.827L4069.38,66.047,3988.419,190.3h-22.33l-48.383-124.25L3899.1,190.3Z;" ,
        "M3843.271,190.3l66.645-215.863h55.54l73.23,115.089L4081.63-25.566h55.539L4173.815,190.3h-55.827L4099.38,66.047,4048.419,190.3h-22.33l-78.383-124.25L3899.1,190.3Z;" ,
        "M3903.271,190.3l36.645-215.863h55.54l43.23,115.089L4081.63-25.566h55.539L4203.815,190.3h-55.827L4099.38,66.047,4048.419,190.3h-22.33l-48.383-124.25L3959.1,190.3Z;" ,
        "M3903.271,190.3l46.645-215.863h55.54l63.23,115.089L4111.63-25.566h55.539L4263.815,190.3h-55.827L4129.38,66.047,4078.419,190.3h-22.33l-68.383-124.25L3959.1,190.3Z;" ,
        "M3903.271,190.3,4029.916-25.566h55.54l43.23,115.089L4171.63-25.566h55.539L4263.815,190.3h-55.827L4189.38,66.047,4138.419,190.3h-22.33l-48.383-124.25L3959.1,190.3Z;",
        "M3993.271,190.3l36.645-215.863h55.54l43.23,115.089L4171.63-25.566h55.539L4263.815,190.3h-55.827L4189.38,66.047,4138.419,190.3h-22.33l-48.383-124.25L4049.1,190.3Z" 
    ];

    const [to, setTo] = useState(0);
    const [from, setFrom] = useState(0);

    const [rotation, setRotation] = useState("");
    const firstRender = useRef(true);

    function morphHandler(){

        if(props.sTwist === 4){
            props.sAnimateHandler();
            return;
        }
       
        setFrom(to);
        setTo(prevState => (prevState + 1) % 7);
    }

    const rotationHandler = useCallback(function(){

        if(rotation === "" || rotation === styles.rotation5){
            setRotation(styles.rotation1);
        }

        if(rotation === styles.rotation1){
            setRotation(styles.rotation2);
        }
        if( rotation === styles.rotation2){
            setRotation(styles.rotation3);
        }
        if(rotation === styles.rotation3){
            setRotation(styles.rotation4);
        }
        if(rotation === styles.rotation4){
            setRotation(styles.rotation5);
        }
    },[props.clicked]);

    useEffect(
        () =>{
           if(firstRender.current){
               firstRender.current = false;
               return;
           }
           rotationHandler();
        }, [props.clicked, rotationHandler]
    );

    
    return(<>
        < div className={styles.letterM} onClick={morphHandler} >

               <M0  from = { paths[from] }
                    to = { paths[to] }
                    key = { paths[to] } />
                
            
        </div>
        <div className={[styles.MLetter, rotation].join(" ")} >M</div>
    </>);
}

export default MLetter;