import React from 'react';
import styles from './MLetter.module.css';

const M0 = (props) =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg"  className={styles.svg} viewBox="0 0 480 540"  >
        <path  
               transform="translate(-3840.271 15.566)" fill="#fff" >

                    <animate 
                        attributeName="d" 
                        dur="1s" 
                        fill = "freeze"
                        from = {props.from}
                        to = {props.to}
                    /> 
        </path>

    </svg>
        

    );

}

export default M0;

