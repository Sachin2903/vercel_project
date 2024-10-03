import React, { useEffect, useState, useCallback } from 'react';
import styles from './NLetter.module.css';

const NLetter = (props) =>{

    const [transition, setTransition] = useState(-1);
    const [animation1, setAnimation1] = useState("");
    const [animation2, setAnimation2] = useState("");
    // const [clicked, setClicked] = useState(false);

    const turnHandler = useCallback( function(){
        if(window.innerWidth/window.innerHeight < 1){
            if(props.clicked === 2){
                setAnimation1(styles.minify);
            }
            else if(props.clicked === 3){
                setAnimation1(styles.magnify);
            }
            return;
        }
        switch (transition){

            case 0:
                setAnimation1(styles.toRight);
                setAnimation2(styles.fromTop);
                break;

            case 1:
                setAnimation1(styles.toBottom);
                setAnimation2(styles.fromLeft);
                break;
            
            case 2:
                setAnimation1(styles.toTop);
                setAnimation2(styles.fromBottom);
                break;

            default:
                return;
        }
    }, [transition, props.clicked]
);

    useEffect(
        () =>{
            if(window.innerWidth/window.innerHeight >= 1){
                setTransition( prevState => (prevState + 1) % 3 );
            }
            turnHandler();
        }, [props.clicked]
    );

    



    return(<>
        <span className={[styles.letterN, styles.n1, animation1].join(" ")} >N</span>
        <span className={[styles.letterN, styles.n2, animation2].join(" ")} >N</span>
    </>);
}

export default NLetter;