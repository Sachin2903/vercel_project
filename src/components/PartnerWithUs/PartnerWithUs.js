import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './PartnerWithUs.module.css';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { useEventCallback } from '@material-ui/core';

const PartnerWithUs = (props) =>{

    const refContainer = useRef(null);
    const WINDOW_HEIGHT = window.innerHeight;
    const timerRef = useRef();

    useEffect(
        ()=>{
            const timeoutId = timerRef.current;
            if(refContainer.current !== null){
                props.positionHandler(refContainer.current.getBoundingClientRect().top - 8 * window.innerHeight/100);
            }
            clearTimeout(timeoutId);
        },[]
    );


    const [ landscapeAndroidKeyboard, setLandscapeAndroidKeyboard ] = useState(false)

    const [industrialDesign, setIndustrialDesign] = useState(false);
    const [spaceDesign, setSpaceDesign] = useState(false);
    const [uiDesign, setUiDesign] = useState(false);
    const [graphicDesign, setGraphicDesign] = useState(false);

    const [branding, setBranding] = useState(false);
    const [packagingDesign, setPackagingDesign] = useState(false);
    const [filmAndAudio, setFilmAndAudio] = useState(false);
    const [digitalMarketing, setDigitalMarketing] = useState(false);

    const [ selectionList, setSelectionList ] = useState(new Array())
    const [ serviceSelected, setServiceSelected ] = useState("Industrial Design");

    const [ listAnimate, setListAnimate ] = useState("");
    const [ arrowAnimate, setArrowAnimate ] = useState("");
    
    function addItemHandler(val){
        setSelectionList(prevState => [...prevState, val]);
    }
    
    function removeItemHandler(val){
        setSelectionList(prevState => prevState.filter((e) => e !== val));
    }

    function checkBoxHandler(val){
        switch (val) {
            case "id":
                if(industrialDesign){
                    removeItemHandler("Industrial Design");
                }
                else{
                    addItemHandler("Industrial Design");
                }
                setIndustrialDesign(prevState => !prevState)
                break;

            case "sd":
                if(spaceDesign){
                    removeItemHandler("Space Design");
                }
                else{
                    addItemHandler("Space Design");
                }
                setSpaceDesign(prevState => !prevState)
                break;

            case "ud":
                if(uiDesign){
                    removeItemHandler("UI / UX Design");
                }
                else{
                    addItemHandler("UI / UX Design");
                }
                setUiDesign(prevState => !prevState)
                break;

            case "gd":
                if(graphicDesign){
                    removeItemHandler("Graphic Design");
                }
                else{
                    addItemHandler("Graphic Design");
                }
                setGraphicDesign(prevState => !prevState)
                break;


            case "branding":
                if(branding){
                    removeItemHandler("Branding");
                }
                else{
                    addItemHandler("Branding");
                }
                setBranding(prevState => !prevState)
                break;

            case "pd":
                if(packagingDesign){
                    removeItemHandler("Packaging Design");
                }
                else{
                    addItemHandler("Packaging Design");
                }
                setPackagingDesign(prevState => !prevState)
                break;

            case "fd":
                if(filmAndAudio){
                    removeItemHandler("Film and Audio");
                }
                else{
                    addItemHandler("Film and Audio");
                }
                setFilmAndAudio(prevState => !prevState)
                break;

            case "dm":
                if(digitalMarketing){
                    removeItemHandler("Digital Marketing");
                }
                else{
                    addItemHandler("Digital Marketing");
                }
                setDigitalMarketing(prevState => !prevState)
                break;
        
            default:
                break;
        }
    }

    function toggleListHandler(event, val){
        if(val){
            if(listAnimate === "" || listAnimate === styles.unAnimateList){
                setListAnimate( styles.animateList );
                setArrowAnimate( styles.animateArrow );
            }
            else{
                setListAnimate( styles.unAnimateList );
                setArrowAnimate( styles.unAnimateArrow );
            }

            focusIntoViewHandler(event, "list")
        }
        
        else{
            setListAnimate( styles.unAnimateList );
            setArrowAnimate( styles.unAnimateArrow );  
            blurHandler("");   
        }
    }

    function selectServiceHandler(event){
        setServiceSelected(event.target.id);
        setListAnimate("");
    }

    function focusIntoViewHandler(event, name){
        if(window.screen.width < 1280){
            bodyTouchHandler();
            if( name === "name" && window.innerHeight !== WINDOW_HEIGHT && window.screen.width/window.screen.height > 1 ){
                setLandscapeAndroidKeyboard(true);
            }
        }

    }

    function blurHandler(name){
        if( name === "name" && window.innerHeight !== WINDOW_HEIGHT && window.screen.width/window.screen.height > 1 ){
            setLandscapeAndroidKeyboard(false);
        }
    }

    function bodyTouchHandler(){
        if(window.screen.width < 1280 ){
            let timer = setTimeout(() => {
                refContainer.current.scrollIntoView();
                window.scrollBy(0,-30);
                clearTimeout(timer);
            }, 500);
            timerRef.current = timer;
        }
        
    }

    return(
        <div ref={ refContainer } className={styles.container} onClick={bodyTouchHandler}  >
            <div className={styles.description} >
                <span className={styles.text1} >Partner With Us</span>
                <span className={styles.text2} >Let us show you the importance of Design.</span>
            </div>
            <div className={styles.formBox} style={ landscapeAndroidKeyboard  ? { paddingTop: "30vh" } : null } > 
                <div className={styles.head} style = { landscapeAndroidKeyboard  ? { display: "none" } : null } >Get a Quote</div>
                <div className={styles.checkboxGroupHead} style = { landscapeAndroidKeyboard  ? { display: "none" } : null } >Select Service</div>
                <div className={styles.checkboxGroup} style = { landscapeAndroidKeyboard  ? { display: "none" } : null } >
                    <div className={styles.checkboxList} >
                        <div className={styles.checkboxLabelPair} >
                            <label htmlFor="id" className={styles.labels} >Industrial Design</label>
                            <Checkbox
                                    checked = { industrialDesign }
                                    name = "id"
                                    onChange = {(event)=>checkBoxHandler(event.target.name)}  />
                        </div>

                        <div className={styles.checkboxLabelPair} >
                            <label htmlFor="sd" className={styles.labels} >Space Design</label>
                            <Checkbox
                                    checked = { spaceDesign }
                                    name = "sd"
                                    onChange = {(event)=>checkBoxHandler(event.target.name)}  />
                        </div>

                        <div className={styles.checkboxLabelPair} >
                            <label htmlFor="ud" className={styles.labels} >UI/UX Design</label>
                            <Checkbox
                                    checked = { uiDesign }
                                    name = "ud"
                                    onChange = {(event)=>checkBoxHandler(event.target.name)}  />
                        </div>

                        <div className={styles.checkboxLabelPair} >
                            <label htmlFor="gd" className={styles.labels} >Graphic Design</label>
                            <Checkbox
                                    checked = { graphicDesign }
                                    name = "gd"
                                    onChange = {(event)=>checkBoxHandler(event.target.name)}  />
                        </div>
                    </div>

                    <div className={styles.checkboxList} >
                        <div className={styles.checkboxLabelPair} >
                            <label htmlFor="branding" className={styles.labels} >Branding</label>
                            <Checkbox
                                    checked = { branding }
                                    name = "branding"
                                    onChange = {(event)=>checkBoxHandler(event.target.name)}  />
                        </div>

                        <div className={styles.checkboxLabelPair} >
                            <label htmlFor="pd" className={styles.labels} >Packaging Design</label>
                            <Checkbox
                                    checked = { packagingDesign }
                                    name = "pd"
                                    onChange = {(event)=>checkBoxHandler(event.target.name)}  />
                        </div>

                        <div className={styles.checkboxLabelPair} >
                            <label htmlFor="fd" className={styles.labels} >Film and Audio</label>
                            <Checkbox
                                    checked = { filmAndAudio }
                                    name = "fd"
                                    onChange = {(event)=>checkBoxHandler(event.target.name)}  />
                        </div>

                        <div className={styles.checkboxLabelPair} >
                            <label htmlFor="dm" className={styles.labels} >Digital Marketing</label>
                            <Checkbox
                                    checked = { digitalMarketing }
                                    name = "dm"
                                    onChange = {(event)=>checkBoxHandler(event.target.name)}  />
                        </div>

                    </div>
                
                </div>
                <form className={styles.inputboxGroup} name="quotation"  method="POST" >
                    <input type="hidden" name="form-name" value="quotation" readOnly />
                    <label className={styles.labelsInput} >Name</label>
                    <input type="text" name="name" className={styles.inputBox} onFocus={(event) => focusIntoViewHandler(event, "name")} onBlur={()=> blurHandler("name")} required />
                    <label className={styles.labelsInput} >E-mail</label> 
                    <input type="email" name="email" className={styles.inputBox} onFocus={(event) => focusIntoViewHandler(event, "email")} onBlur={()=> blurHandler("email")} required  />
                    <input type="text" name="services" value={selectionList.join(", ")} className={styles.selectionList} readOnly />
                    
                    <label className={styles.labelsPortrait} >Select Service</label>
                    { window.innerWidth/window.innerHeight <= 13/9 ?
                        <div className={styles.selectionBox} tabIndex={1} onClick={(event)=>toggleListHandler(event, true)} onBlur={()=>toggleListHandler(false)} ><input type="text" name="services" readOnly value={ serviceSelected } className={styles.hideInputBoxBorder} /><span className={[styles.arrow, arrowAnimate].join(" ")} ></span></div>
                    : null }
                    <ul className={[styles.list, listAnimate].join(" ")} >
                        <li id="Industrial Design" className={styles.listItem} onClick={selectServiceHandler} >Industrial Design</li>
                        <li id="Space Design" className={styles.listItem} onClick={selectServiceHandler} >Space Design</li>
                        <li id="UI / UX Design" className={styles.listItem} onClick={selectServiceHandler} >UI / UX Design</li>
                        <li id="Graphics Design" className={styles.listItem} onClick={selectServiceHandler} >Graphics Design</li>
                        <li id="Branding" className={styles.listItem} onClick={selectServiceHandler} >Branding</li>
                        <li id="Packaging Design" className={styles.listItem} onClick={selectServiceHandler} >Packaging Design</li>
                        <li id="Film and Video" className={styles.listItem} onClick={selectServiceHandler} >Film and Video</li>
                        <li id="Digital Marketing" className={styles.listItem} onClick={selectServiceHandler} >Digital Marketing</li>
                    </ul>
                    <input type="submit" value="Submit Request" className={styles.submitButton} />
                </form>
            </div>
            
        </div>
    );
}

export default PartnerWithUs;