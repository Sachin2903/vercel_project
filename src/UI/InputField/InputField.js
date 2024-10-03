import React, { useEffect, useState, useRef, useCallback } from 'react';
// import styles from './InputField.module.css';
import {  withStyles } from '@material-ui/core/styles';
import { TextField, useScrollTrigger } from '@material-ui/core';

const InputField = (props) => {

  const [size, setSize] = useState("");
  const WINDOW_HEIGHT = window.innerHeight;
  const WINDOW_WIDTH = window.innerWidth;
  const refContainer = useRef();

  const resizeHandler = useCallback(() =>{

    if( window.innerHeight !== WINDOW_HEIGHT && window.innerWidth === WINDOW_WIDTH && window.innerWidth/window.innerHeight < 1.4 ){ // capture android soft keyboard popup
      return;
    }

    if(window.innerWidth > window.innerHeight && window.innerWidth < 1280){
      // alert(2)
      setSize("2vw");
      return;
    }

    if(window.innerWidth < 630){
      setSize("4vw"); 
    }
    else if(window.innerWidth >= 630 && window.innerWidth < 800){
      setSize("3vw");
    }
    else if(window.innerWidth >= 800 && window.innerWidth < 1280){
      setSize("2vw");
    }

    else if(window.innerWidth >= 1280 ){
      setSize("1vw");
    }
  });

  function focusHandler(event){
    if(window.screen.width < 1280){
      refContainer.current.scrollIntoView();
      window.scrollBy(0, 50);
    }
  }

  useEffect(
    () =>{

      // resizeHandler();
      window.addEventListener('resize', resizeHandler); // eventHandler gets added when the component gets rendered for the first time and then detects resize events whenever they occur.

      return () =>{
        window.removeEventListener('resize', resizeHandler);
      }
    }, []
  );

    const CssTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: '#00a5d6'
          },
          '& label': {
            fontSize: size, 
            fontWeight: "bold",
            color: '#c4c4c4',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#4f5356',
          },

          '& .MuiInput-underline:hover:not($disabled):not($focused):not($error):before': {
            borderBottomColor: '#ffffff',
          },

          '& .MuiInput-underline:after': {
            borderBottomColor: '#00a5d6',
          },

        '& .MuiInput-hover:before': {
          borderBottomColor: '#ffffff',
        },

          '& .MuiInputBase-root': {
            color: '#c4c4c4',
          }
          
        },
      })(TextField);

    return(
        <div style={props.styles} ref = {refContainer} >
            <CssTextField
                id={props.id}
                type={props.type}
                disabled = {props.disabled}
                label={props.label}
                name={props.name}
                fullWidth = {props.fullWidth}
                variant={props.variant}
                required={props.required}
                value = { props.value }
                size = {props.size}
                autoComplete='off'
                onFocus = {focusHandler}
            />
        </div>
    );
}

export default InputField;