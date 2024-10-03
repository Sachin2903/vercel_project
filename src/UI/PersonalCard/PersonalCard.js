import React, { useState } from 'react';
import styles from './PersonalCard.module.css';

const PersonalCard = (props) =>{

    const [ nameAnimate, setNameAnimate ] = useState("");
    const [ designationAnimate, setDesignationAnimate ] = useState("");
    const [ descriptionAnimate, setDescriptionAnimate ] = useState("");
    const [ photoAnimate, setPhotoAnimate ] = useState("");

    function hoverHandler(val){
        if(val){
            setNameAnimate(styles.nameAnimate);
            setDesignationAnimate(styles.designationAnimate);
            setDescriptionAnimate(styles.descriptionAnimate);
            setPhotoAnimate(styles.photoAnimate);
            return;
        }
        if(nameAnimate === styles.nameAnimate){

            setNameAnimate(styles.nameUnanimate);
            setDesignationAnimate(styles.designationUnanimate);
            setDescriptionAnimate(styles.descriptionUnanimate);
            setPhotoAnimate(styles.photoUnanimate);
        }
        
    }

    function deviceCheckHandler(event){
        if(!(window.innerWidth < 1280 &&  window.innerWidth/window.innerHeight > 1)){
            hoverHandler(true);
        }
    }

    return(<>

        <div className={[styles.container, (props.raise ? styles.raise : "")].join(" ")} onClick={()=>hoverHandler(nameAnimate !== styles.nameAnimate)} onMouseEnter={deviceCheckHandler} onMouseLeave={()=>hoverHandler(false)} >
            <div className={[styles.name, nameAnimate].join(" ")} >{ props.name }</div>
            <div className={[styles.designation, designationAnimate].join(" ")} >{ props.designation }</div>
            <div className={[styles.description, descriptionAnimate].join(" ")} >{ props.description }</div>
            <div className={[styles.photo, photoAnimate].join(" ")} ><img alt="loading..." src={props.photo} className={styles.image} /></div>
        </div>

        <div className={[styles.containerPortrait, (props.raise ? styles.raise : "")].join(" ")} onClick={()=>hoverHandler(nameAnimate !== styles.nameAnimate)} onMouseLeave={()=>hoverHandler(false)} >
            <div className={[styles.name, nameAnimate].join(" ")} >{ props.name }</div>
            <div className={[styles.designation, designationAnimate].join(" ")} >{ props.designation }</div>
            <div className={[styles.description, descriptionAnimate].join(" ")} >{ props.description }</div>
            <div className={[styles.photo, photoAnimate].join(" ")} ><img alt="loading..." src={props.photo} className={styles.image} /></div>
        </div>

    </>);
}

export default PersonalCard;