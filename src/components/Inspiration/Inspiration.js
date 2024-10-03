import React, { useState, useRef } from 'react';
import styles from './Inspiration.module.css';
import Map from '../../assets/Inspiration/map.png';
import GameBoy from '../../assets/Inspiration/gameboy.png';
// import Brushes from '../../assets/Inspiration/brushes.png';
// import Fabric from '../../assets/Inspiration/fabric.png';
import AtWork from '../../assets/Inspiration/atwork.png';
// import Drill from '../../assets/Inspiration/drill.png';
// import TShirt from '../../assets/Inspiration/tshirt.png';
// import Shoe from '../../assets/Inspiration/shoe.png';
import HealthMetrics from '../../assets/Inspiration/healthmetrics.png';
// import Furniture from '../../assets/Inspiration/furniture.png';
// import Spray from '../../assets/Inspiration/spray.png';
import Sketch from '../../assets/Inspiration/sketch.png';
// import Keyboard from '../../assets/Inspiration/keyboard.png';
// import Calculator from '../../assets/Inspiration/calculator.png';
// import Chess from '../../assets/Inspiration/chess.png';
import Lamp from '../../assets/Inspiration/lamp.png';
import Meter from '../../assets/Inspiration/meter.png';
import Camera from '../../assets/Inspiration/camera.png';
// import Brochures from '../../assets/Inspiration/brochures.png';
// import Tubes from '../../assets/Inspiration/tubes.png';

import LazyImage from '../../UI/LazyImage/LazyImage';


const Inspiration = (props) => {

    const [ pos, setPos ] = useState(0);
    const refContainer = useRef();
    
    function positionHandler(){
        setPos(refContainer.current.getBoundingClientRect().top);
    }

    return(
        <div ref={refContainer} className={styles.container} onWheel={positionHandler} onTouchMove={positionHandler} >
            <div className={styles.shade} >
            </div>
            <div className={styles.head} >
                Inspiration
            </div>
            <div className={styles.main} >
                <div className={styles.up} >
                    <div className={styles.card}><img alt="loading..." src={Map} className={styles.image} /></div>
                    <div className={styles.card}><img alt="loading..." src={GameBoy} className={styles.image} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'brushes.png').default} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'fabric.png').default} /></div>


                    <div className={[styles.card, styles.show].join(" ")}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'sketch.png').default} /></div>
                    <div className={[styles.card, styles.show].join(" ")}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'keyboard.png').default} /></div>
                    <div className={styles.cardBlank}></div>
                </div>
                <div className={styles.up} >
                    <div className={styles.cardBlank}></div>
                    <div className={styles.card}><img alt="loading..." src={AtWork} className={styles.image} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'drill.png').default} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'tshirt.png').default} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'shoe.png').default} /></div>


                    <div className={[styles.card, styles.show].join(" ")}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'chess.png').default} /></div>
                    <div className={[styles.card, styles.show].join(" ")}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'meter.png').default} /></div>
                </div>
                <div className={styles.up} >
                    <div className={styles.card}><img alt="loading..." src={HealthMetrics} className={styles.image} /></div>
                    <div className={styles.card}><img alt="loading..." src={Lamp} className={styles.image} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'furniture.png').default} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'spray.png').default} /></div>

                    <div className={[styles.card, styles.show].join(" ")}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'brochures.png').default} /></div>
                    <div className={[styles.card, styles.show].join(" ")}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'tubes.png').default} /></div>
                    <div className={styles.cardBlank}></div>
                </div>
                <div className={[styles.up, styles.hide].join(" ")} >
                    <div className={styles.cardBlank}></div>
                    <div className={styles.card}><img alt="loading..." src={Sketch} className={styles.image} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'keyboard.png').default} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'calculator.png').default} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'chess.png').default} /></div>
                </div>
                <div className={[styles.up, styles.hide].join(" ")} >
                    <div className={styles.card}><img alt="loading..." src={Meter} className={styles.image} /></div>
                    <div className={styles.card}><img alt="loading..." src={Camera} className={styles.image} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'brochures.png').default} /></div>
                    <div className={styles.card}><LazyImage pos={pos} src={require('../../assets/Inspiration/' + 'tubes.png').default} /></div>
                    <div className={styles.cardBlank}></div>
                </div>
            </div>
        </div>
    )
}

export default Inspiration ;