import React, { useEffect, useRef, useState } from 'react';
import styles from './Letters.module.css';
import DLetter from '../DLetter/DLetter';
import ELetter from '../ELetter/ELetter';
import SLetter from '../SLetter/SLetter';
import MLetter from '../MLetter/MLetter';
import ALetter from '../ALetter/ALetter';
import NLetter from '../NLetter/NLetter';
import DreamDiscoverDevelop3 from '../DreamDiscoverDevelop/DreamDiscoverDevelop3';

const Letters = (props) =>{

    const [shade, setShade] = useState("");
    const [letterMClicked, setLetterMClicked] = useState(false);
    const [letterAClicked, setLetterAClicked] = useState(false);
    const [letterNClicked, setLetterNClicked] = useState(false);
    const [lettersANClicked, setLettersANClicked] = useState(0);
    const [letterEClicked, setLetterEClicked] = useState(false);
    const [letterSClicked, setLetterSClicked] = useState(false);
    const [orientT, setOrientT] = useState("");
    const [orientL, setOrientL] = useState("");
    const [orientE, setOrientE] = useState("");
    const [ tleCount, setTleCount ] = useState(0);
    const [ sTwist, setStwist ] = useState(0);
    const [ tilt, setTilt ] = useState("");
    const [ animateHead, setAnimateHead ] = useState("");
    const [ animateData, setAnimateData ] = useState("");

    const [ animateLetters, setAnimateLetters ] = useState("");
    const [ animateDBox, setAnimateDBox ] = useState("");
    const [ animateEBox, setAnimateEBox ] = useState("");
    const [ animateSBox, setAnimateSBox ] = useState("");
    const [ animateMBox, setAnimateMBox ] = useState("");
    const [ animateABox, setAnimateABox ] = useState("");
    const [ animateNBox, setAnimateNBox ] = useState("");
    const [ animateTLEBox, setAnimateTLEBox ] = useState("");

    const timerRef = useRef();

    useEffect(
        ()=>{
            const timeoutId = timerRef.current;
            window.scrollTo(0, 0);

        return ()=>{
            clearTimeout(timeoutId)
        }
        }, []
    );

    useEffect(
        ()=>{
            if(props.fadeOut){
                setAnimateLetters(styles.fadeOut);
                setAnimateDBox(styles.dBoxOut);
                setAnimateEBox(styles.eBoxOut);
                setAnimateSBox(styles.sBoxOut);
                setAnimateMBox(styles.mBoxOut);
                setAnimateABox(styles.aBoxOut);
                setAnimateNBox(styles.nBoxOut);
                setAnimateTLEBox(styles.tleBoxOut);
            }
            if(props.fadeIn){
                setAnimateLetters(styles.fadeIn);
                setAnimateDBox(styles.dBoxIn);
                setAnimateEBox(styles.eBoxIn);
                setAnimateSBox(styles.sBoxIn);
                setAnimateMBox(styles.mBoxIn);
                setAnimateABox(styles.aBoxIn);
                setAnimateNBox(styles.nBoxIn);
                setAnimateTLEBox(styles.tleBoxIn);
            }

        }, [props.fadeOut, props.fadeIn]
    );

    useEffect(
        () => {
            
            if(props.hover && !props.dropped){
                setShade(styles.eBoxShadeHover);
                if( !props.dropped && animateHead === styles.animateHead ){
                        setAnimateHead(styles.unAnimateHead);
                        setAnimateData(styles.unAnimateData);
                }
            }

            else if(props.dropped){
                setShade(styles.eBoxShadeDropped);
                setAnimateHead(styles.animateHead);
                setAnimateData(styles.animateData);
            }

            else{
                setShade("");
            }
        }, [props.hover, props.dropped, animateHead]
    );


    function letterAClickedHandler(){
        setLetterAClicked(prevState => !prevState);
    }

    function letterEClickedHandler(){
        if(letterEClicked === 2){
            setLetterEClicked(1);
            return;
        }
        setLetterEClicked(prevState => (prevState + 1) % 3);
    }

    function letterNClickedHandler(){
        setLetterNClicked(prevState => !prevState);
    }

    function lettersANClickedHandler(){
        if(lettersANClicked === 3){
            setLettersANClicked(1);
            return;
        }
        setLettersANClicked(prevState => (prevState + 1) % 4);
    }

    function letterSClickedHandler(){
        if(sTwist > 2 && !(window.innerWidth < 1279 && window.innerWidth/window.innerHeight <= 1)){
            return;
        }
        sAnimateHandler();
        
    }

    function letterMClickedHandler(){
        setLetterMClicked(prevState => !prevState)
    }

    function sAnimateHandler(){
        setLetterSClicked(prevState => !prevState);
    }

    function tleJuggleHandler(){

        if(sTwist === 3 && !(window.innerWidth < 1279 && window.innerWidth/window.innerHeight <= 1)){
            sAnimateHandler();
            return;
        }

        switch(tleCount){
            case 0:
                swapLE1();
                break;
            
            case 1:
                swapTL();
                break;
            
            case 2:
                swapLE2();
                break;

            case 3:
                swapTE();
                break;

            default:
                return;
        }
        
        setTleCount(prevState => (prevState + 1) % 4 );
    }

    function swapTL(){
        setOrientT(styles.TtoL);
        setOrientL(styles.LtoT);
    }

    function swapTE(){
        setOrientT(styles.TtoE);
        setOrientE(styles.EtoT);
    }   

    function swapLE1(){
        setOrientL(styles.LtoE1);
        setOrientE(styles.EtoL1);
    } 

    function swapLE2(){
        setOrientL(styles.LtoE2);
        setOrientE(styles.EtoL2);
    } 
    
    function sTwistHandler(val){
        
        setStwist(val);
        if( val === 3 ){
            setTilt(styles.tilt);
            return;
        }
        else if( val === 4 ){
            setTilt(styles.unTilt);
            let timer = setTimeout(() => {
                    setTilt("");
                    clearTimeout(timer);
                }, 500);
            timerRef.current = timer;
            return;
        }
    }

    return(<>
        { props.fadeIn ? <DreamDiscoverDevelop3 /> : null }
        <div className={[styles.dynamicPadding, (props.fadeOut ? styles.fadeOut : styles.fadeIn)].join(" ")}  ></div>
        <div className={[styles.container, animateLetters ].join(" ")}  >
            <div className={[ styles.dBox, animateDBox].join(" ")}  >
                <DLetter fade={props.fadeOut} />
            </div>
            <div className={styles.flexBoxColumn} >
                <div className={[styles.eBox, shade, animateEBox].join(" ")} >
                    <ELetter dropped={props.dropped}/>
                        
                    <div className={ styles.description } >
                        <div className={[styles.heads, animateHead].join(" ")} >
                            <span className={styles.headerBig} >Indian</span>
                            <span className={styles.headerSmall} >Design Company</span>
                        </div>
                        <span className={[styles.descriptionData, animateData].join(" ")} >Desmantle started from a vision to redefine the way people interact with the world around them with innovative systems, products and visuals.</span>
                    </div>
                </div>
                <div className={styles.smantle} >
                    <div className={ [styles.sBox, animateSBox].join(" ") } onClick={letterSClickedHandler} >
                        <SLetter dropped={props.dropped}
                                 clicked = {letterSClicked}
                                 sTwistHandler = {sTwistHandler} />
                    </div>
                    <div className={styles.mantle} >
                        <div className={ [styles.mBox, animateMBox].join(" ") } >
                            <MLetter sTwist = {sTwist}
                                     sAnimateHandler = {sAnimateHandler} />
                        </div>
                        <div className={styles.antle} >
                            <div className={ [styles.aBox, animateABox].join(" ") } onClick = {letterAClickedHandler} >
                                <ALetter clicked = {letterAClicked}  />
                            </div>
                            <div className={styles.ntle} >
                                <div className={[styles.nBox, animateNBox].join(" ")} onClick = {letterNClickedHandler} >
                                    <NLetter clicked = {letterNClicked} />
                                </div>
                                <div className={[styles.tle, animateTLEBox].join(" ")} onClick={tleJuggleHandler} >
                                    <div className={styles.tBox} >
                                        <span className={[styles.lettersTLE, orientT, tilt].join(" ")}  >T</span>
                                    </div>
                                    <div className={styles.lBox}>
                                        <span className={[styles.lettersTLE, orientL, tilt].join(" ")} >L</span>
                                    </div>
                                    <div className={styles.eSmallBox}>
                                        <span className={[styles.lettersTLE, orientE, tilt].join(" ")} >E</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div className={[styles.dynamicPadding, (props.fadeOut ? styles.fadeOut : "")].join(" ")}  ></div>

    {/* E, A, N and tle will be handled within Letters component due to the simplicity of their animation effects on mobile. */}

        { !props.fadeOut ?<div className={styles.flexBoxRow} > 
                            <div className={styles.dynamicPortraitPadding} ></div>
                            <div className={styles.containerPortrait} >
                                <div className={styles.dBox}  >
                                    <DLetter fade={props.fadeOut} />
                                </div>
                                <div className={styles.flexBoxPortraitRow} >
                                    <div className={styles.eBoxPortrait} onClick={letterEClickedHandler} >
                                        <ELetter clicked = {letterEClicked} />
                                    </div>
                                    <div className={styles.sBoxPortrait} onClick={letterSClickedHandler} >
                                        <SLetter dropped={props.dropped}
                                                 clicked = {letterSClicked}
                                                 sTwistHandler = {sTwistHandler} />
                                    </div>
                                </div>
                                <div className={styles.flexBoxPortraitRow} >
                                    <div className={styles.eBoxPortrait} onClick={letterMClickedHandler} >
                                        <MLetter clicked = {letterMClicked} />
                                    </div>
                                    <div className={styles.antlePortrait} >
                                        <div className={styles.anPortrait} onClick={lettersANClickedHandler} >
                                            <ALetter clicked = {lettersANClicked} />
                                            <NLetter clicked = {lettersANClicked} />
                                        </div>
                                        <div className={[styles.tle, animateTLEBox].join(" ")} onClick={tleJuggleHandler} >
                                            <div className={styles.tBox} >
                                                <span className={[styles.lettersTLE, orientT].join(" ")}  >T</span>
                                            </div>
                                            <div className={styles.lBox}>
                                                <span className={[styles.lettersTLE, orientL].join(" ")} >L</span>
                                            </div>
                                            <div className={styles.eSmallBox}>
                                                <span className={[styles.lettersTLE, orientE].join(" ")} >E</span> 
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={styles.dynamicPortraitPadding} ></div>
                            
                            </div>: null
         }
    </>);
}

export default Letters;