import React, { useState, useRef, useEffect } from 'react';
import styles from './OurValues.module.css';

const OurValues = (props) =>{

    const POSITIVE_DISRUPTION_TEXT = "We challenge the status quo and aim to create an impact that disrupts paradigms and brings about positive change. We strive to provide our clients with design solutions that help differentiate them from their competition.";
    
    const FACILITATING_CONNECTIONS_TEXT = "We create designs that evoke emotional response. We believe that our design must help our clients connect with their customers and build meaningful relationships.";
    
    const HARMONY_CENTRIC_TEXT = "We seek to give a voice to the user's ideas design around their unique selves. We design with and for businesses and have a holistic system and harmony centric design approach that benefits all and compromises none.";
   
    const LIBERATION_BY_DESIGN = "We believe design can push the boundaries of what is thought to be possible. By creating innovative solutions, we change systems, behaviour and thought, helping people break away from their limitations. We aim to change lives and design to liberate."

    const SYNERGY_TEXT = "We strongly believe in collaboration within and outside of our studio. By making space for our ideas from different perspectives, we expand our knowledge, resources and vision. Together, we are greater than the sum of our parts.";
    
    const PUSHING_BOUNDARIES_TEXT = "We do not shy away from approaching new problems and working in fields we have no experience in. We are explorers in design. We solve problems, we tread new ground and our novel perspective is our strength.";
    
    const firstRender = useRef(true);
    const [ loading, setLoading ] = useState(firstRender.current)
    const [animatePd, setAnimatePd] = useState("");
    const [animateFc, setAnimateFc] = useState("");
    const [animateHc, setAnimateHc] = useState("");
    const [animateLd, setAnimateLd] = useState("");
    const [animateSy, setAnimateSy] = useState("");
    const [animatePb, setAnimatePb] = useState("");

    useEffect(
        ()=>{
            let timer = null;
            if(firstRender.current){
                firstRender.current = false;
                timer = setTimeout(() => {
                                setLoading(false);
                                clearTimeout(timer);
                }, 1000);
            }
            return ()=>{
                clearTimeout(timer);
            }
        },[]
    );

    function hoverHandler(id, val){
        if(val){
            switch (id) {
                case "pd":
                    setAnimatePd(styles.animate);
                    break;

                case "fc":
                    setAnimateFc(styles.animate);
                    break;

                case "hc":
                    setAnimateHc(styles.animate);
                    break;

                case "ld":
                    setAnimateLd(styles.animate);
                    break;

                case "sy":
                    setAnimateSy(styles.animate);
                    break;

                case "pb":
                    setAnimatePb(styles.animate);
                    break;
            
                default:
                    break;
            }
        }
        else{
            switch (id) {
                case "pd":
                    if(animatePd === styles.animate){
                        setAnimatePd(styles.unAnimate);
                    }
                    break;

                case "fc":
                    if(animateFc === styles.animate){
                        setAnimateFc(styles.unAnimate);
                    }
                    break;

                case "hc":
                    if(animateHc === styles.animate){
                        setAnimateHc(styles.unAnimate);
                    }
                    break;

                    case "ld":
                    if(animateLd === styles.animate){
                        setAnimateLd(styles.unAnimate);
                    }
                    break;

                case "sy":
                    if(animateSy === styles.animate){
                        setAnimateSy(styles.unAnimate);
                    }
                    break;

                case "pb":
                    if(animatePb === styles.animate){
                        setAnimatePb(styles.unAnimate);
                    }
                    break;
            
                default:
                    break;
            }
        }
    }

    function hoverPortraitHandler(id, val){
        if(val){
            switch (id) {
                case "pd":
                    setAnimatePd(styles.animateTop);
                    break;

                case "pb":
                    setAnimatePb(styles.animateTop);
                    break;

                case "fc":
                    setAnimateFc(styles.animateMiddle);
                    break;

                case "ld":
                    setAnimateLd(styles.animateMiddle);
                    break;

                case "hc":
                    setAnimateHc(styles.animateBottom);
                    break;

                case "sy":
                    setAnimateSy(styles.animateBottom);
                    break;

            
                default:
                    break;
            }
        }
        else{
            switch (id) {
                case "pd":
                    setAnimatePd(styles.unAnimateTop);
                    break;

                case "pb":
                    setAnimatePb(styles.unAnimateTop);
                    break;

                case "fc":
                    setAnimateFc(styles.unAnimateMiddle);
                    break;

                case "ld":
                    setAnimateLd(styles.unAnimateMiddle);
                    break;

                case "hc":
                    setAnimateHc(styles.unAnimateBottom);
                    break;
                    
                case "sy":
                    setAnimateSy(styles.unAnimateBottom);
                    break;
            
                default:
                    break;
            }
        }
    }

    function deviceCheckHandler(id){
        if(!(window.innerWidth < 1280 &&  window.innerWidth/window.innerHeight > 1)){
            hoverHandler(id, true);
        }
    }

    return(
        <div className={styles.container} >
            <div className={styles.mainHead} >Our Values</div>
            <div className={styles.flexboxRow} >
                <div id="pd" className={[styles.itemBox, ( loading ? styles.topDown : ""), animatePd].join(" ")} style={{ backgroundColor: ( animatePd === styles.animate ? "#32989e" : "#1A1A1A") }} onClick={(event)=>hoverHandler(event.currentTarget.id, animatePd !== styles.animate)} onMouseEnter={(event)=>deviceCheckHandler(event.currentTarget.id)} onMouseLeave={(event)=>hoverHandler(event.currentTarget.id, false)} >
                    <span className={styles.itemHead} >Positive Disruption</span>
                    <p className={ animatePd === "" ? styles.hideDetail : (animatePd === styles.animate ? styles.revealedDetail : styles.unrevealedDetail) }  >{ POSITIVE_DISRUPTION_TEXT }</p> 
                </div>
                <div id = "fc" className={[styles.itemBox, ( loading ? styles.bottomUp1 : ""), animateFc].join(" ")} style={{ backgroundColor: ( animateFc === styles.animate   ? "#27343a" : "#1A1A1A") }} onClick={(event)=>hoverHandler(event.currentTarget.id, animateFc !== styles.animate)} onMouseEnter={(event)=>deviceCheckHandler(event.currentTarget.id)} onMouseLeave={(event)=>hoverHandler(event.currentTarget.id, false)} >
                    <span className={styles.itemHead} >Facilitating Connections</span>
                    <p className={ animateFc === "" ? styles.hideDetail : (animateFc === styles.animate ? styles.revealedDetail : styles.unrevealedDetail) }  >{ FACILITATING_CONNECTIONS_TEXT }</p> 
                </div>
                <div id = "hc" className={[styles.itemBox, ( loading ? styles.topDown : ""), animateHc].join(" ")} style={{ backgroundColor: ( animateHc === styles.animate ? "#7e2a27" : "#1A1A1A") }} onClick={(event)=>hoverHandler(event.currentTarget.id, animateHc !== styles.animate)} onMouseEnter={(event)=>deviceCheckHandler(event.currentTarget.id)} onMouseLeave={(event)=>hoverHandler(event.currentTarget.id, false)}  >
                    <span className={styles.itemHead} >Harmony Centric</span>
                    <p className={ animateHc === "" ? styles.hideDetail : (animateHc === styles.animate ? styles.revealedDetail : styles.unrevealedDetail) }  >{ HARMONY_CENTRIC_TEXT }</p> 
                </div>
            </div>
            <div className={styles.flexboxRow} >
                <div id="ld" className={[styles.itemBox, ( loading ? styles.bottomUp2 : ""), animateLd].join(" ")} style={{ backgroundColor: ( animateLd === styles.animate ? "#52b987" : "#1A1A1A") }} onClick={(event)=>hoverHandler(event.currentTarget.id, animateLd !== styles.animate)} onMouseEnter={(event)=>deviceCheckHandler(event.currentTarget.id)} onMouseLeave={(event)=>hoverHandler(event.currentTarget.id, false)} >
                    <span className={styles.itemHead} >Liberation by design</span>
                    <p className={ animateLd === "" ? styles.hideDetail : (animateLd === styles.animate ? styles.revealedDetail : styles.unrevealedDetail) } >{ LIBERATION_BY_DESIGN }</p>
                </div>
                <div id="sy" className={[styles.itemBox, ( loading ? styles.bottomUp2 : ""), animateSy].join(" ")} style={{ backgroundColor: ( animateSy === styles.animate ? "#6b86b5" : "#1A1A1A") }} onClick={(event)=>hoverHandler(event.currentTarget.id, animateSy !== styles.animate)} onMouseEnter={(event)=>deviceCheckHandler(event.currentTarget.id)} onMouseLeave={(event)=>hoverHandler(event.currentTarget.id, false)} >
                    <span className={styles.itemHead} >Synergy</span>
                     <p className={ animateSy === "" ? styles.hideDetail : (animateSy === styles.animate ? styles.revealedDetail : styles.unrevealedDetail) } >{ SYNERGY_TEXT }</p> 
                </div>
                <div id="pb" className={[styles.itemBox, ( loading ? styles.bottomUp2 : ""), animatePb].join(" ")} style={{ backgroundColor: ( animatePb === styles.animate ? "#d78145" : "#1A1A1A") }} onClick={(event)=>hoverHandler(event.currentTarget.id, animatePb !== styles.animate)} onMouseEnter={(event)=>deviceCheckHandler(event.currentTarget.id)} onMouseLeave={(event)=>hoverHandler(event.currentTarget.id, false)} >
                    <span className={styles.itemHead} >Pushing Boundaries</span>
                    <p className={ animatePb === "" ? styles.hideDetail : (animatePb === styles.animate ? styles.revealedDetail : styles.unrevealedDetail) } >{ PUSHING_BOUNDARIES_TEXT }</p>
                </div>

            </div>

            <div className={styles.potraitColContainer} >
                <div className={styles.flexboxCol} >
                    <div id="pd" className={[styles.itemBoxTop, ( loading ? styles.topDown : ""), animatePd].join(" ")} style={{ backgroundColor: ( animatePd === styles.animateTop ? "#32989e" : "#1A1A1A") }} onClick={(event)=>hoverPortraitHandler(event.currentTarget.id, animatePd !== styles.animateTop)} >
                        <span className={styles.itemHead} >Positive Disruption</span>
                        <p className={ animatePd === "" ? styles.hideDetail : (animatePd === styles.animateTop ? styles.revealedDetail : styles.unrevealedDetail) }  >{ POSITIVE_DISRUPTION_TEXT }</p> 
                    </div>
                    <div id = "fc" className={[styles.itemBoxMiddle, ( loading ? styles.bottomUp1 : ""), animateFc].join(" ")} style={{ backgroundColor: ( animateFc === styles.animateMiddle   ? "#27343a" : "#1A1A1A") }} onClick={(event)=>hoverPortraitHandler(event.currentTarget.id, animateFc !== styles.animateMiddle)} >
                        <span className={styles.itemHead} >Facilitating Connections</span>
                        <p className={ animateFc === "" ? styles.hideDetail : (animateFc === styles.animateMiddle ? styles.revealedDetail : styles.unrevealedDetail) }  >{ FACILITATING_CONNECTIONS_TEXT }</p> 
                    </div>
                    <div id = "hc" className={[styles.itemBoxBottom, ( loading ? styles.topDown : ""), animateHc].join(" ")} style={{ backgroundColor: ( animateHc === styles.animateBottom ? "#7e2a27" : "#1A1A1A") }} onClick={(event)=>hoverPortraitHandler(event.currentTarget.id, animateHc !== styles.animateBottom )} >
                        <span className={styles.itemHead} >Harmony Centric</span>
                        <p className={ animateHc === "" ? styles.hideDetail : (animateHc === styles.animateBottom ? styles.revealedDetail : styles.unrevealedDetail) }  >{ HARMONY_CENTRIC_TEXT }</p> 
                    </div>
                </div>
                <div className={styles.flexboxCol} >
                    <div id="pb" className={[styles.itemBoxTop, ( loading ? styles.bottomUp2 : ""), animatePb].join(" ")} style={{ backgroundColor: ( animatePb === styles.animateTop ? "#d78145" : "#1A1A1A") }} onClick={(event)=>hoverPortraitHandler(event.currentTarget.id, animatePb !== styles.animateTop)} >
                        <span className={styles.itemHead} >Pushing Boundaries</span>
                        <p className={ animatePb === "" ? styles.hideDetail : (animatePb === styles.animateTop ? styles.revealedDetail : styles.unrevealedDetail) } >{ PUSHING_BOUNDARIES_TEXT }</p>
                    </div>
                    <div id="ld" className={[styles.itemBoxMiddle, ( loading ? styles.bottomUp2 : ""), animateLd].join(" ")} style={{ backgroundColor: ( animateLd === styles.animateMiddle ? "#52b987" : "#1A1A1A") }} onClick={(event)=>hoverPortraitHandler(event.currentTarget.id, animateLd !== styles.animateMiddle )} >
                        <span className={styles.itemHead} >Liberation by design</span>
                        <p className={ animateLd === "" ? styles.hideDetail : (animateLd === styles.animateMiddle ? styles.revealedDetail : styles.unrevealedDetail) } >{ LIBERATION_BY_DESIGN }</p>
                    </div>
                    <div id="sy" className={[styles.itemBoxBottom, ( loading ? styles.bottomUp2 : ""), animateSy].join(" ")} style={{ backgroundColor: ( animateSy === styles.animateBottom ? "#6b86b5" : "#1A1A1A") }} onClick={(event)=>hoverPortraitHandler(event.currentTarget.id, animateSy !== styles.animateBottom )} >
                        <span className={styles.itemHead} >Synergy</span>
                        <p className={ animateSy === "" ? styles.hideDetail : (animateSy === styles.animateBottom ? styles.revealedDetail : styles.unrevealedDetail) } >{ SYNERGY_TEXT }</p> 
                    </div>
                </div>
            </div>

            
        </div>
    ); 
}

export default OurValues;