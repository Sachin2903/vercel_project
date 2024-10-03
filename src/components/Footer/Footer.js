import React from 'react';
import styles from './Footer.module.css'
import BigLogo from '../../assets/logo.svg';

const Footer = (props) =>{
 
    return(
        <div className = {styles.container} >
            {/* <div className = {styles.section1} >
                <div className={styles.logo} >
                    <img alt="loading..." src={BigLogo} className={styles.bigLogo} />
                </div>
                <div className={styles.links} >
                    <div className={styles.list} >
                        <div className={styles.item} >
                            <span className={styles.highlight} >Jobs</span>
                        </div>
                        <div className={styles.item} >
                            <span className={styles.highlight} >About</span>
                        </div>
                        <div className={styles.item} >
                            <span className={styles.highlight} >Team</span>
                        </div>
                        <div className={styles.item} >
                            <span className={styles.highlight} >Careers</span>
                        </div>
                    </div>
                    <div className={styles.list} >
                        <div className={styles.item} >
                            <span className={styles.highlight} >Partners</span>
                        </div>
                        <div className={styles.item} >
                            <span className={styles.highlight} >Blog</span>
                        </div>
                        <div  ></div>
                    </div>
                </div>
            </div > */}
            <div className={styles.section2} >
                Copyright &#169; Desmantle Studio
            </div>
        </div>
    );
}

export default Footer;