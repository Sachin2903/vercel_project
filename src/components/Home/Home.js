import React, { useEffect, useState, useRef } from 'react';
import styles from './Home.module.css';
import Letters from '../Letters/Letters'
import DreamDiscoverDevelop1 from '../DreamDiscoverDevelop/DreamDiscoverDevelop1';
import DreamDiscoverDevelop2 from '../DreamDiscoverDevelop/DreamDiscoverDevelop2';
import OurValues from '../OurValues/OurValues';
import Services from '../Services/Services';
import PartnerWithUs from '../PartnerWithUs/PartnerWithUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer.js';
import { withRouter } from 'react-router-dom';

const Home = (props) =>{

    const [ scrollPos, setScrollPos ] = useState("letters");
    const [ toRender, setToRender ] = useState(null);
    const [ pauseScroll, setPauseScroll ] = useState(false); 
    const [ servicesPosition, setServicesPosition ] = useState(null);
    const [ contactUsPosition, setContactUsPosition ] = useState(null);
    const [ partnerWithUsPosition, setPartnerWithUsPosition ] = useState(null);
    const [ scrollToPartnerWithUsHit, setScrollToPartnerWithUsHit ] = useState(false);
    const [ lettersFadeIn, setLettersFadeIn ] = useState(false);
    const [ touchStart, setTouchStart ] = useState(-1);
    const [ touchMove, setTouchMove ] = useState(-1);

    const [ scrollCount, setScrollCount ] = useState(0);
    const [ scrollInterval, setScrollInterval ] = useState(0);
    const [ scrollCountFinal, setScrollCountFinal ] = useState(false);
    const [ timeDelta, setTimeDelta ] = useState(1600);

    const [ isTouchDevice, setIsTouchDevice ] = useState(false);

    const timerRef1 = useRef();
    const timerRef2 = useRef();
    
    const REST = <> 
                    <OurValues />

                    <Services dropped = {props.dropped}  
                              positionHandler = {servicesPositionHandler} />
                              
                    <PartnerWithUs dropped = {props.dropped}  
                                   positionHandler = {partnerWithUsPositionHandler} />

                    <ContactUs dropped = {props.dropped}
                               positionHandler = {contactUsPositionHandler} />
                               
                    <Footer />
                </>
    
    useEffect(
        ()=>{
            const timeoutId1 = timerRef1.current;
            const timeoutId2 = timerRef2.current;

            return ()=>{
                clearTimeout(timeoutId1);
                clearTimeout(timeoutId2);
            }

        },[]
    );

    useEffect( // check if services option has been clicked in the menu and if the postion of the Services container on the page has been ascertained.
        ()=>{
            if(props.scrollToServicesHit){
                window.history.scrollRestoration = 'manual';
                props.setLettersScreen(false);
                if(scrollPos !== "rest"){
                    setScrollPos("rest");
                    setToRender(REST);
                }
                if( scrollPos === "rest" && servicesPosition){
                    window.scrollTo(0, servicesPosition);
                    props.setScrollToServicesHit(false);

                }
            }
        },[props.scrollToServicesHit, servicesPosition, scrollPos]
    );

    useEffect( // check if contactUs option has been clicked in the menu and if the postion of the ContactUs container on the page has been ascertained.
        ()=>{
            if(props.scrollToContactUsHit){
                window.history.scrollRestoration = 'manual';
                props.setLettersScreen(false);
                if(scrollPos !== "rest"){
                    setScrollPos("rest"); 
                    setToRender(REST)
                }
                if( scrollPos === "rest" && contactUsPosition){
                    window.scrollTo(0, contactUsPosition);
                    props.setScrollToContactUsHit(false);

                }
            }
        },[props.scrollToContactUsHit, contactUsPosition, scrollPos]
    );

    useEffect( // check if "Throw us a design challenge" has been clicked in ddd and if the postion of the PartnerWithUs container on the page has been ascertained.
        ()=>{
            if(scrollToPartnerWithUsHit){
                window.history.scrollRestoration = 'manual';
                props.setLettersScreen(false);
                if(scrollPos !== "rest"){
                    setScrollPos("rest");
                    setToRender(REST)
                }
                if( scrollPos === "rest" && partnerWithUsPosition){
                    window.scrollTo(0, partnerWithUsPosition);
                    setScrollToPartnerWithUsHit(false);

                }
            }
        },[scrollToPartnerWithUsHit, partnerWithUsPosition, scrollPos]
    );

    useEffect(
        ()=>{
            if(scrollPos === "rest"){
                setToRender(null);
                setToRender(<> 
                                <OurValues />
                                <Services dropped = {props.dropped}  
                                          positionHandler = {servicesPositionHandler} />
                                <PartnerWithUs dropped = {props.dropped}  
                                               positionHandler = {partnerWithUsPositionHandler} />
                                <ContactUs dropped = {props.dropped}
                                           positionHandler = {contactUsPositionHandler} />
                                <Footer />
                            </>);
            }
            
        }, [props.dropped]
    );

    useEffect(
        ()=>{
            if(scrollPos === "letters"){
                props.setLettersScreen(true);
                return;
            }
            props.setLettersScreen(false);
        }, [scrollPos]
    );

    function servicesPositionHandler(val){
        if(servicesPosition){ return };
        setServicesPosition(val);
    }

    function contactUsPositionHandler(val){
        if(contactUsPosition){ return };
        setContactUsPosition(val);
    }

    function partnerWithUsPositionHandler(val){
        if(partnerWithUsPosition){ return };
            setPartnerWithUsPosition(val);
    }

    function scrollCountHandler(){
        if(scrollCount === 0){
            setScrollInterval(Date.now());
        }
        else if(scrollCount === 1){
            if(Date.now() - scrollInterval < 20 ){
                setTimeDelta(1600);
            }
            else{
                setTimeDelta(800);
            }
            setScrollInterval(Date.now() - scrollInterval);
            setScrollCountFinal(true);
        }
        setScrollCount(prevState => prevState + 1);
        
    }

    function scrollHandler(event){
        if(!scrollCountFinal && event.type === 'wheel' && !isTouchDevice){
            scrollCountHandler();
        }

        else if(event.type !== 'wheel'){
            setTimeDelta(800);
        }

        if(pauseScroll){
            return;
        }

        let currentPos = event.deltaY;

        if( event.type === 'touchend' ){
                let delta = scrollPos === 'letters' ? 100 :  20;
                if(touchMove > (touchStart + delta) && touchStart >= 0 ){ // difference of delta kept so that miniscule swipe while touching the screen does not trigger the screen change.
                   currentPos = -1; // negative because swipe direction is reverse of scroll direction for the same navigation result. 
            }
            else if(touchMove  < (touchStart - delta) && touchMove >= 0 ){
                currentPos = 1;
            }
            else{
                currentPos = 0;
            }

            setTouchStart(-1); // resetting values of both touch events to -1, so that any further clicks on home screen after a swipe, do not trigger a scroll. 
            setTouchMove(-1);
        }
        
        
        if(currentPos > 0){
            setLettersFadeIn(false);
            switch (scrollPos) {
                case "letters":
                    setScrollPos("ddd1");
                    setPauseScroll(true);
                    let timer1 = setTimeout(() => {
                        setPauseScroll(false);
                        clearTimeout(timer1)
                    }, timeDelta);
                    timerRef1.current = timer1;
                    setToRender(<DreamDiscoverDevelop1 setScrollToPartnerWithUsHit = {setScrollToPartnerWithUsHit} />);
                    break;

                case "ddd1":
                    setScrollPos("rest");
                    setToRender(REST);

                    setScrollCount(0);
                    setScrollInterval(0);
                    setScrollCountFinal(false);
                    break;

                case "ddd2":
                    setScrollPos("rest");
                    setToRender(REST);

                    setScrollCount(0);
                    setScrollInterval(0);
                    setScrollCountFinal(false);
                    break;
            
                default:
                    break;
            }
        }
        else if(currentPos < 0 ){
            switch (scrollPos) {
                case "ddd1":
                    setLettersFadeIn(true);
                    setScrollPos("letters");
                    setToRender(null)
                    break;

                case "ddd2":
                    setLettersFadeIn(true);
                    setScrollPos("letters");                    
                    setToRender(null);
                    break;

                case "rest":
                    let tempPos = document.body.getBoundingClientRect().top;
                    if(tempPos >= 0){
                        props.history.push('/');
                        setScrollPos("ddd2");
                        setPauseScroll(true);
                        let timer2 = setTimeout(() => {
                            setPauseScroll(false);
                            clearTimeout(timer2)
                        }, timeDelta);
                        timerRef2.current = timer2;
                        setToRender(<DreamDiscoverDevelop2 setScrollToPartnerWithUsHit = {setScrollToPartnerWithUsHit} />)
                        
                    }
                    break;
                    
            
                default:
                    break;
            }
        }
        
    }

    function touchStartHandler(event){
        if(!isTouchDevice){
            setIsTouchDevice(true);
        }
        setTimeDelta(800);
        setTouchStart(event.touches[0].clientY);
    }

    function touchMoveHandler(event){
        setTouchMove(event.touches[0].clientY);
    }

    return(
        <div className={styles.container} onWheel={scrollHandler} onTouchStart={touchStartHandler} onTouchMove={touchMoveHandler} onTouchEnd={scrollHandler} >
            <div className={styles.lettersAndMenu} onScroll={scrollHandler} >
              
                <div className={styles.componentContainer} >
                     { toRender }
                    {scrollPos === "letters" ? <Letters  dropped = {props.dropped}
                                                         fadeIn = {lettersFadeIn}
                                                         hover = {props.hover} /> : null } 
                </div>
            </div>
            
        </div>
    );
}

export default withRouter(Home);