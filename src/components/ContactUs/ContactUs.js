import React, { useEffect, useRef, useCallback } from 'react';
import styles from './ContactUs.module.css';
import InputField from '../../UI/InputField/InputField.js';
import InstagramIcon from '../../assets/instagram3.png';
import FacebookIcon from '../../assets/facebook3.png';
import TwitterIcon from '../../assets/twitter3.png';
import LinkedInIcon from '../../assets/linkedin3.png'; 

const ContactUs = (props) =>{

    const refContainer = useRef(null);

    const EMAIL = "info@desmantle.studio";
    const PHONE1 = "+91 9927611144";
    const PHONE2 = "+91 7057242931";
    const ADDRESS = "C-306 Desmantle Studio, Eureka Towers, Mindspace, Malad West, Mumbai, Maharashtra 400064";
    
    const timerRef = useRef();

    useEffect(
        ()=>{
            const timeoutId = timerRef.current;
            if(refContainer.current !== null){
                props.positionHandler(refContainer.current.getBoundingClientRect().top - 8 * window.innerHeight/100);
            }

            return ()=>{
                clearTimeout(timeoutId);
            }

        },[]
    );

    function bodyTouchHandler(event){
        if(window.screen.width < 1280){
            let timer = setTimeout(() => {
                refContainer.current.scrollIntoView();
                clearTimeout(timer);
            }, 200);
            timerRef.current = timer;
        }
        
    }

    return(
        <div ref={ refContainer } className={styles.container} onClick={bodyTouchHandler} >
            <div className={styles.details} >
                <div className={styles.text} >
                    <div className={styles.questions} >
                        <span>Looking for a design partner ?</span>
                        <span>Looking for a design job ?</span>
                        <span>Looking for a conversation on design ?</span>
                    </div>
                    <div className={styles.bigHead} >Contact Us</div>
                    <div className = {styles.infopair} >

                    </div>
                    <span className={styles.info} >{ EMAIL }</span>
                    <span className={styles.info} >{ PHONE1 }</span>
                    <span className={styles.info} >{ PHONE2 }</span>
                </div>
                
                <div className={styles.mapBox} >
                    <div className={styles.mapPortrait} >
                        <iframe title="map" className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3468551566534!2d72.83205011538526!3d19.180046953676634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6f15dfcbb11%3A0xa84dda6fadba19c2!2sEureka%20Towers%20Eureka%20Tower%2C%20Malad%2C%20Rajan%20Pada%2C%20Mindspace%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064!5e0!3m2!1sen!2sin!4v1614785308937!5m2!1sen!2sin" loading="lazy"></iframe>
                    </div>
                    <div className={styles.addressBox} >
                        <p className={styles.addressMsg} >Find us on Map</p>
                        {/* <img alt="loading..." src={Logo} className={styles.logo} /> */}
                        <p className={styles.address} >{ ADDRESS }</p>
                    </div>
                </div>
            </div>
            <div className={styles.formBox} >
                <div className={styles.formHead} >Contact</div>
                
                <form className={styles.fields} name="contact" method="POST" >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={styles.fieldPair} >
                        <InputField
                            id="firstName"
                            type="text"
                            name="firstname"
                            label= "First Name"
                            fullWidth = {true}
                            required = {true}
                            styles = { { width:"90%", padding: "1vh 3vw 1vh 1vw" } }
                            // blurHandler = {inputBlurHandler}
                        />

                        <InputField
                            id="lastName"
                            type="text"
                            label= "Last Name"
                            name="lastname"
                            fullWidth = {true}
                            required = {true}
                            styles = { { width:"90%", padding: "1vh 3vw 1vh 1vw" } }
                            // blurHandler = {inputBlurHandler}
                        />
                                        
                    </div>
                    <div className={styles.fieldPair} >
                    <InputField
                        id="email"
                        type="email"
                        name="email"
                        label= "E-mail"
                        fullWidth = {true}
                        required = {true}
                        styles = { { width:"90%", padding: "1vh 3vw 1vh 1vw" } }
                        // blurHandler = {inputBlurHandler}
                    />

                    <InputField
                        id="phone"
                        type="text"
                        name="phone"
                        label= "Phone"
                        fullWidth = {true}
                        required = {true}
                        styles = { { width:"90%", padding: "1vh 3vw 1vh 1vw" } }
                        // blurHandler = {inputBlurHandler}
                    />
                        
                    </div>
                    <div className={styles.msgField} >
                        <InputField
                            id="msg"
                            type="text"
                            name="msg"
                            label= "Message"
                            fullWidth = {true}
                            required = {true}
                            styles = { { width:"90%", padding: "1vh 3vw 1vh 1vw" } }
                            // blurHandler = {inputBlurHandler}
                        />
                    </div>
                    <input type="submit" value="Send" className={styles.submitButton} />
                </form>
                <div className={styles.infoPortrait} >
                    <span className={styles.info} >{ EMAIL }</span>
                    <span className={styles.info} >{ PHONE1 }</span>
                    <span className={styles.info} >{ PHONE2 }</span>
                </div>
                <div className={styles.smGroup} >
                    <span>You can also find us on</span>
                    <div className={styles.iconList} >
                        <a href='https://www.instagram.com/des.mantle/' target='_blank' rel="noreferrer" ><img alt="loading..." src={InstagramIcon} className={styles.icon} /></a>
                        <a href='https://www.facebook.com/desmantlestudio' target='_blank' rel="noreferrer" ><img alt="loading..." src={FacebookIcon} className={styles.icon} /></a>
                        <a href='https://twitter.com/desmantlestudio' target='_blank' rel="noreferrer" ><img alt="loading..." src={TwitterIcon} className={styles.icon} /></a>
                        <a href='https://www.linkedin.com/company/desmantle-studio/' target='_blank' rel="noreferrer" ><img alt="loading..." src={LinkedInIcon} className={styles.icon} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;