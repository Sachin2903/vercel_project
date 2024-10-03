import React, { useState, useRef } from 'react';
import styles from './Work.module.css';
import Tubes from '../../assets/Work/tubes.png';
import Drill from '../../assets/Work/drill.png';
import Keyboard from '../../assets/Work/keyboard.png';
import Camera from '../../assets/Work/camera.png';
import Pair from '../../assets/Work/pair.png';
import Brushes from '../../assets/Work/brushes.png';
import Shoe from '../../assets/Work/shoe.png';
import Stool from '../../assets/Work/stool.png';
import Furniture from '../../assets/Work/furniture.png';
import Stand from '../../assets/Work/stand.png';
import House from '../../assets/Work/house.png';
import Room from '../../assets/Work/room.png';
import Window from '../../assets/Work/window.png';
import Tabs from '../../assets/Work/tabs.png';
import Fps from '../../assets/Work/fps.png';
import Flow from '../../assets/Work/flow.png';
import Juices from '../../assets/Work/juices.png';
// import Collage from '../../assets/Work/collage.png';
// import Dance from '../../assets/Work/dance.png';
// import Box from '../../assets/Work/box.png';
// import PorkPepper from '../../assets/Work/porkpepper.png';
// import Horn from '../../assets/Work/horn.png';
// import Random from '../../assets/Work/random.png';
// import AirplaneCard from '../../assets/Work/airplanecard.png';
// import VisitingCard from '../../assets/Work/visitingcard.png';
// import Passika from '../../assets/Work/passika.png';
// import Ladder from '../../assets/Work/ladder.png';
// import Cornetto from '../../assets/Work/cornetto.png';
// import PeaceCoffee from '../../assets/Work/peacecoffee.png';
// import Baronet from '../../assets/Work/baronet.png';
// import Jar from '../../assets/Work/jar.png';
// import Red from '../../assets/Work/red.png';
// import Meditation from '../../assets/Work/meditation.png';
// import Cartoon from '../../assets/Work/cartoon.png';
// import OldMan from '../../assets/Work/oldman.png';
// import Couple from '../../assets/Work/couple.png';

import LazyImage from '../../UI/LazyImage/LazyImage';

const Work = (props) => {

    const dict = {
        "id": 0,
        "sd": 1,
        "ui": 2,
        "gd": 3,
        "branding": 4,
        "pd": 5,
        "fv": 6,
        "dm": 7
    }

    const refRow1 = useRef();
    const refRow2 = useRef();
    const refRow3 = useRef();
    const refRow4 = useRef();
    const refRow5 = useRef();
    const refRow6 = useRef();
    const refRow7 = useRef();
    const refRow8 = useRef();
    
    const refContainer = useRef();


    const [pressed, setPressed] = useState(false);
    const [ holdPosition, setHold ] = useState(0);
    const [ position, setPosition ] = useState(initializeHandler());
    const [ lastPosition, setLastPosition ] = useState(initializeHandler());
    const [ pos, setPos ] = useState(0);
    // const [ arrowClicked, setArrowClicked ] = useState(false);

    const [ refImageRow, setRef ] = useState(refRow1);
    const refImageBox = useRef();
    const [ index, setIndex ] = useState(0);
    
    function initializeHandler(){
        let arr = new Array(8);
        for(let i = 0; i < 8; i++){
            arr[i] = 0;
        }
        return arr;
    }

    function arrowClickedHandler(){
        // setPressed(true);
        // setArrowClicked(true);
    }

    function holdHandler(event){
        if(event.canceleable){
            event.preventDefault();
        }
        setPressed(true);
        if(event.type === 'touchstart'){
            setHold(event.touches[0].clientX);
        }
        else{
            setHold(event.clientX);
        }
        setIndex(dict[event.currentTarget.id]);
        switch(dict[event.currentTarget.id]){
            case 0:
                setRef(refRow1);
                break;

            case 1:
                setRef(refRow2);
                break;

            case 2:
                setRef(refRow3);
                break;

            case 3:
                setRef(refRow4);
                break;

            case 4:
                setRef(refRow5);
                break;

            case 5:
                setRef(refRow6);
                break;

            case 6:
                setRef(refRow7);
                break;

            case 7:
                setRef(refRow8);
                break;
            
            default:
            
        }
        
    }

    function slideHandler(event){
        if(event.type !== 'touchmove'){
            event.preventDefault();
        }
        let width = refImageRow.current.offsetWidth;
        let difference = width - refImageBox.current.offsetWidth + 5;
        let slideable = difference > 0 ? difference : 0;
        let delta = 0;
        if(event.type === 'touchmove'){
            positionHandler();
            delta = event.touches[0].clientX - holdPosition;
        }
        else{
            delta = event.clientX - holdPosition;
        }
        
        if(pressed){
            if((Math.abs(lastPosition[index] + delta) <= slideable) && ((lastPosition[index] + delta) <= 0)){
                let arr = [...position];
                arr[index] = lastPosition[index] + delta;
                setPosition(arr);
                return;
            } 
        }
    }

    function leaveHandler(event){
        if(event.canceleable){
            event.preventDefault();
        }
        setPressed(false);
        let arr = [...lastPosition];
        arr[index] = position[index];
        setLastPosition(arr);
    }

    function positionHandler(){
        setPos(refContainer.current.getBoundingClientRect().top);
    }
    
    return(
        <div ref={refContainer} className={styles.container} onMouseMove={slideHandler} onTouchMove={slideHandler} onMouseUp={leaveHandler} onMouseLeave={leaveHandler} onTouchEnd={leaveHandler} onWheel={positionHandler} >
            <div className={styles.shade} >
            </div>
            <div className={styles.head} >
                Work
            </div>
            <div className={styles.main} >
                <div className={[styles.categoryBox, styles.id].join(" ")} >
                    <div className={styles.categoryName} >Industrial Design</div>
                    <div ref={refImageBox} className={styles.imageBox} >
                        <div id="id" ref={refRow1} className={styles.imageRow} onMouseDown={holdHandler} onTouchStart={holdHandler} style={{left: position[0] }} >
                            <div className={styles.categoryNamePortrait} >Industrial Design</div>
                            <div className={styles.imageHolder} ><img alt="loading..." alt="loading" src={Tubes} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Drill} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Keyboard} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Camera} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Pair} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Brushes} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Shoe} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Tubes} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Stool} className={styles.image} /></div>
                        </div>
                    </div>
                        <div className={styles.arrow} onClick={arrowClickedHandler} ></div>
                </div>
                <div className={[styles.categoryBox, styles.sd].join(" ")}  >
                    <div className={styles.categoryName} >Space Design</div>
                    <div  className={styles.imageBox} >
                        <div id="sd" ref={refRow2} className={styles.imageRow} onMouseDown={holdHandler} onTouchStart={holdHandler}  style={{left: position[1] }} >
                            <div className={styles.categoryNamePortrait} >Space Design</div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Furniture} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Stand} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={House} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Room} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Window} className={styles.image} /></div>
                        </div>
                    </div>
                        <div className={styles.arrow} onClick={arrowClickedHandler} ></div>
                </div>
                <div className={[styles.categoryBox, styles.ui].join(" ")}  >
                    <div className={styles.categoryName} >UI / UX Design</div>
                    <div  className={styles.imageBox} >
                        <div id="ui" ref={refRow3} className={styles.imageRow} onMouseDown={holdHandler} onTouchStart={holdHandler}  style={{left: position[2] }} >
                            <div className={styles.categoryNamePortrait} >UI / UX Design</div>   
                            <div className={styles.imageHolder} ><img alt="loading..." src={Tabs} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Fps} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Flow} className={styles.image} /></div>
                            <div className={styles.imageHolder} ><img alt="loading..." src={Juices} className={styles.image} /></div>
                        </div>
                    </div>
                        <div className={styles.arrow} onClick={arrowClickedHandler} ></div>
                </div>
                <div className={[styles.categoryBox, styles.gd].join(" ")}  >
                    <div className={styles.categoryName} >Graphic Design</div>
                    <div  className={styles.imageBox} >
                        <div id="gd" ref={refRow4} className={styles.imageRow} onMouseDown={holdHandler} onTouchStart={holdHandler} style={{left: position[3] }} >
                            <div className={styles.categoryNamePortrait} >Graphic Design</div> 
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'collage.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'dance.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'box.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'porkpepper.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'horn.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'collage.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'dance.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'box.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'porkpepper.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'horn.png').default} /></div>
                        </div>
                    </div>
                        <div className={styles.arrow} onClick={arrowClickedHandler} ></div>
                </div>
                <div className={[styles.categoryBox, styles.branding].join(" ")}  >
                    <div className={styles.categoryName} >Branding</div>
                    <div  className={styles.imageBox} >
                        <div id="branding" ref={refRow5} className={styles.imageRow} onMouseDown={holdHandler} onTouchStart={holdHandler} style={{left: position[4] }} >
                            <div className={styles.categoryNamePortrait} >Branding</div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'random.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'airplanecard.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'visitingcard.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'passika.png').default} /></div>
                        </div>
                    </div>
                        <div className={styles.arrow} onClick={arrowClickedHandler} ></div>
                </div>
                <div className={[styles.categoryBox, styles.pd].join(" ")}  >
                    <div className={styles.categoryName} >Packaging Design</div>
                    <div  className={styles.imageBox} >
                        <div id="pd" ref={refRow6} className={styles.imageRow} onMouseDown={holdHandler} onTouchStart={holdHandler} style={{left: position[5] }} >
                            <div className={styles.categoryNamePortrait} >Packaging Design</div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'ladder.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'cornetto.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'peacecoffee.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'baronet.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'jar.png').default} /></div>
                        </div>
                    </div>
                        <div className={styles.arrow} onClick={arrowClickedHandler} ></div>
                </div>
                <div className={[styles.categoryBox, styles.fv].join(" ")}  >
                    <div className={styles.categoryName} >Film and Video</div>
                    <div  className={styles.imageBox} >
                        <div id="fv" ref={refRow7} className={styles.imageRow} onMouseDown={holdHandler} onTouchStart={holdHandler} style={{left: position[6] }} >
                            <div className={styles.categoryNamePortrait} >Film and Video</div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'red.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'meditation.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'cartoon.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'oldman.png').default} /></div>
                            <div className={styles.imageHolder} ><LazyImage pos={pos} src={require('../../assets/Work/' + 'couple.png').default} /></div>
                        </div>
                    </div>
                        <div className={styles.arrow} onClick={arrowClickedHandler} ></div>
                </div>
                {/* <div className={[styles.categoryBox, styles.dm].join(" ")}  >
                    <div className={styles.categoryName} >Digital Marketing</div>
                    <div  className={styles.imageBox} >
                        <div id="dm" ref={refRow8} className={styles.imageRow} onMouseDown={holdHandler} onTouchStart={holdHandler} style={{left: position[7] }} >
                            <div className={styles.categoryNamePortrait} >Digital Marketing</div>
                            <div className={styles.imageHolder} ></div>
                            <div className={styles.imageHolder} ></div>
                            <div className={styles.imageHolder} ></div>
                            <div className={styles.imageHolder} ></div>
                            <div className={styles.imageHolder} ></div>
                            <div className={styles.imageHolder} ></div>
                            <div className={styles.imageHolder} ></div>
                            <div className={styles.imageHolder} ></div>
                            <div className={styles.imageHolder} ></div>
                        </div>
                        <div className={styles.arrow} onClick={arrowClickedHandler} ></div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Work;