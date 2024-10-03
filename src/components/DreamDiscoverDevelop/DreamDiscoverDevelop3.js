import React from 'react';
import styles from './DreamDiscoverDevelop3.module.css';

const DreamDiscoverDevelop = (props) =>{

    return(<>
        <div className={styles.container} >
            <div className={styles.flexboxRow1 } >
                <div className={styles.box1} >
                    <span className={styles.pageHead} >Dream.</span>
                    <span className={styles.pageHead} >Discover.</span>
                    <span className={styles.pageHead} >Develop.</span>
                    <span className={styles.pageHead} >Deliver.</span>
                </div>
                <div className={styles.box2} >
                    <span className={styles.box2Text1} >We empower your business vision</span>
                    <span className={styles.box2Text2} >By Design.</span>
                </div>
            </div>
            <div className={styles.flexboxRow2 } >
                <div className={styles.box3} >
                    <span className={styles.box3Text} >What do we do ?</span>
                </div>
                <div className={styles.box4} >
                    <div className={styles.detail} >
                       <p className={styles.detailText} >At Desmantle, we are trying to define and spearhead 'Indian Design' of tomorrow.</p>
                       <p className={styles.detailText} >The past inspires us but our eyes are set on the horizon, designing for the future.</p>
                    </div>
                    <div className={styles.flexboxColumn} >
                        <div className={styles.directionContainer} >
                            <div className={styles.direction1} >Throw us a design challenge &#10230;</div>
                        </div>
                        <div className={styles.directionContainer} >
                            <div className={styles.direction2} >Read stories about Indian Design &#10230;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default DreamDiscoverDevelop;