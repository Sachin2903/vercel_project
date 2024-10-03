import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Checkbox as Mcheck } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import styles from './Checkbox.module.css'

const Checkbox = (props) =>{

  const [size, setSize] = useState(1.2);
  const WINDOW_HEIGHT = window.innerHeight;
  const firstRender = useRef(true);

  const resizeHandler = useCallback(() =>{

    if(window.innerHeight !== WINDOW_HEIGHT){
      return;
    }

    if(window.innerWidth >= 1279){
      setSize(1.2);
    }

    else if(window.innerHeight > 1500 && window.innerHeight < 1280){
      setSize(1);
    }

    else if(window.innerWidth < 1500){
      setSize(0.8);
    }

    
  },[WINDOW_HEIGHT] )


  useEffect(
    () => {
        if(firstRender.current){
          firstRender.current = false;
          resizeHandler();
          window.addEventListener('resize', resizeHandler); // eventHandler gets added when the component gets rendered for the first time and then detects resize events whenever they occur.
          return;
      }
        
    }, [resizeHandler]
  );

  const CssCheckBox = withStyles ({
      root: {

        transform: `scale(${size})`,
        '&$checked': {
          color: '#000000',
        },
      },
      checked: {},
      })(Mcheck)


  return(<>
    
    <CssCheckBox label='My checkbox' checked={props.checked} name = {props.name} onChange={props.onChange} />

        {/* <div className={styles.checkboxBorder} >
            <input type="checkbox" checked={props.checked} name = {props.name} onChange={props.onChange} />
        </div> */}
    </>);
}

export default Checkbox;