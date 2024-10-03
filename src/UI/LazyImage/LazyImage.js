import React, { useState, useRef, useEffect } from 'react';
import styles from './LazyImage.module.css'

const LazyImage = (props) => {

    const [src, setSrc] = useState("");
    const refContainer = useRef();

    useEffect(
        () => {
            if(refContainer.current.getBoundingClientRect().top <= window.innerHeight - 10 ){
                setSrc(props.src);
            }
        }, [props.pos]
    );

    return(
        <img ref={refContainer} alt="loading..." src={src} className={styles.image} />
    );
}

export default LazyImage;