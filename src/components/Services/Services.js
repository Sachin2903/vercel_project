import React, { useState, useEffect, useRef } from 'react';
import styles from './Services.module.css';
// import Spinner from '../../UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

import Services1 from '../../assets/Services/services1.png';
import Services2 from '../../assets/Services/services2.png';
import Services3 from '../../assets/Services/services3.png';
import Services4 from '../../assets/Services/services4.png';
import Services5 from '../../assets/Services/services5.png';
import Services6 from '../../assets/Services/services6.png';
import Services7 from '../../assets/Services/services7.png';

import ID1 from '../../assets/Services/IndustrialDesign/id1.png';
import ID2 from '../../assets/Services/IndustrialDesign/id2.png';
import ID3 from '../../assets/Services/IndustrialDesign/id3.png';
import ID4 from '../../assets/Services/IndustrialDesign/id4.png';
import ID5 from '../../assets/Services/IndustrialDesign/id5.png';
import ID6 from '../../assets/Services/IndustrialDesign/id6.png';
import ID7 from '../../assets/Services/IndustrialDesign/id7.png';

import SD1 from '../../assets/Services/SpaceDesign/sd1.png';
import SD2 from '../../assets/Services/SpaceDesign/sd2.png';
import SD3 from '../../assets/Services/SpaceDesign/sd3.png';
import SD4 from '../../assets/Services/SpaceDesign/sd4.png';
import SD5 from '../../assets/Services/SpaceDesign/sd5.png';
import SD6 from '../../assets/Services/SpaceDesign/sd6.png';
import SD7 from '../../assets/Services/SpaceDesign/sd7.png';

import UX1 from '../../assets/Services/UiUxDesign/ux1.png';
import UX2 from '../../assets/Services/UiUxDesign/ux2.png';
import UX3 from '../../assets/Services/UiUxDesign/ux3.png';
import UX4 from '../../assets/Services/UiUxDesign/ux4.png';
import UX5 from '../../assets/Services/UiUxDesign/ux5.png';
import UX6 from '../../assets/Services/UiUxDesign/ux6.png';
import UX7 from '../../assets/Services/UiUxDesign/ux7.png';

import GD1 from '../../assets/Services/GraphicsDesign/gd1.png';
import GD2 from '../../assets/Services/GraphicsDesign/gd2.png';
import GD3 from '../../assets/Services/GraphicsDesign/gd3.png';
import GD4 from '../../assets/Services/GraphicsDesign/gd4.png';
import GD5 from '../../assets/Services/GraphicsDesign/gd5.png';
import GD6 from '../../assets/Services/GraphicsDesign/gd6.png';
import GD7 from '../../assets/Services/GraphicsDesign/gd7.png';

import Branding1 from '../../assets/Services/Branding/branding1.png';
import Branding2 from '../../assets/Services/Branding/branding2.png';
import Branding3 from '../../assets/Services/Branding/branding3.png';
import Branding4 from '../../assets/Services/Branding/branding4.png';
import Branding5 from '../../assets/Services/Branding/branding5.png';
import Branding6 from '../../assets/Services/Branding/branding6.png';
import Branding7 from '../../assets/Services/Branding/branding7.png';

import PD1 from '../../assets/Services/PackageDesign/pd1.png';
import PD2 from '../../assets/Services/PackageDesign/pd2.png';
import PD3 from '../../assets/Services/PackageDesign/pd3.png';
import PD4 from '../../assets/Services/PackageDesign/pd4.png';
import PD5 from '../../assets/Services/PackageDesign/pd5.png';
import PD6 from '../../assets/Services/PackageDesign/pd6.png';
import PD7 from '../../assets/Services/PackageDesign/pd7.png';

import FV1 from '../../assets/Services/FilmVideo/fv1.png';
import FV2 from '../../assets/Services/FilmVideo/fv2.png';
import FV3 from '../../assets/Services/FilmVideo/fv3.png';
import FV4 from '../../assets/Services/FilmVideo/fv4.png';
import FV5 from '../../assets/Services/FilmVideo/fv5.png';
import FV6 from '../../assets/Services/FilmVideo/fv6.png';
import FV7 from '../../assets/Services/FilmVideo/fv7.png';

import DM1 from '../../assets/Services/DigitalMarketing/dm1.png';
import DM2 from '../../assets/Services/DigitalMarketing/dm2.png';
import DM3 from '../../assets/Services/DigitalMarketing/dm3.png';
import DM4 from '../../assets/Services/DigitalMarketing/dm4.png';
import DM5 from '../../assets/Services/DigitalMarketing/dm5.png';
import DM6 from '../../assets/Services/DigitalMarketing/dm6.png';
import DM7 from '../../assets/Services/DigitalMarketing/dm7.png';

const Services = (props) =>{

    const refContainer = useRef(null);
    
    const SERVICES_TEXT = (
        <div>
            <p>
                Desmantle Studio exists to create extraordinary experiences for clients and stakeholders. We achieve this by developing innovative consumer and commercial products that create social impact, harness the latest technologies and make our clients leaders in their industries.
            </p>
            <b>
                Are you looking for a partner for your brand ? Why not get in touch to discuss how we can help achieve your business goals and success in your industry. Let’s make it happen!
            </b>
        </div>
    );
    
    const ID_TEXT = "Industrial Design is a process of Planning and execution, that deals with the journey of product, from the discovery of the need to the delivery of the experience our user goes through, developing into a form of tangible product using the industrial resources available around us. We, at Desmantle, are built and led by a team of Designers, who expertise in the field of understanding various elements of the industry, enhancing the product form, aesthetics, economy and its experience.";
    
    const SD_TEXT = "A well-designed workspace acts as a catalyst for productivity. We design spaces that facilitate thinking and are reflective of the goals and values of the company. A space with a strong voice not only increases efficiency of it’s people but also helps aligning their vision to a common cause, creating a culture of co-operation and a sense of belongingness.";
    
    const UX_TEXT = "Your ideas and messages should never be hampered by bad visual representation. Our team consists of Illustrators, graphic designers and UI/UX designers. We aim to create stunning visuals that make for more efficient and engaging communication and help you express what you really want to.";
    
    const GD_TEXT = "We provide a range of graphic design services for Web publishing, Print Media, Publication Design, Illustration, Product Graphics, Corporate Presentations and many more. All your Digital and Offline graphic design needs catered under one umbrella.";
    
    const BRANDING_TEXT = "We provide creative branding solutions after listening to and understanding the needs, beliefs and values of your company and expressing them appropriately. We help create branding collaterals that best represent you and are reflective of your ideas and vision.";
    
    const PD_TEXT = "Packaging is the face of any product in the market.We create visually appealing packaging that is expressive and builds positive connections with people. The packaging tells a story and we help you connect with its consumer and make your product stand out in the market. We provide end to end service from packaging structure and label design to production.";

    const FD_TEXT = "People are influenced and inspired by visual media in the modern world. This is particularly true when it comes to films and videos. We can bring your vision and story to life with our full-service production team! It's time to inspire. It's time to DESMANTLE.";

    const DM_TEXT = "Your company's online presence, if well-planned, can bring you closer to your customers. Our custom Social Media Management strategies, SEO campaigns, Digital Advertising, and Promotions ensure that you are always connected with your customers and that your business goals are met.";

    const [selected, setSelected] = useState("");
    const [deselectedText, setDeselectedText] = useState("");
    const [text, setText] = useState();
    const [color, setColor] = useState("");
    const [animateSelected, setAnimateSelected] = useState("");
    const [animateDeselected, setAnimateDeselected] = useState("");
    const [animateImagesDeselected, setAnimateImagesDeselected] = useState("");
    const [greying, setGreyOut] = useState("");
    const [ hidePortraitMenu, setHidePortraitMenu ] = useState("");
    const [ showPortraitContent, setShowPortraitContent ] = useState("");
    const [ contentHead, setContentHead ] = useState("");

    const [ image1, setImage1 ] = useState("");
    const [ image2, setImage2 ] = useState("");
    const [ image3, setImage3 ] = useState("");
    const [ image4, setImage4 ] = useState("");
    const [ image5, setImage5 ] = useState("");
    const [ image6, setImage6 ] = useState("");
    const [ image7, setImage7 ] = useState("");

    const [ imageDeselected1, setImageDeselected1 ] = useState("");
    const [ imageDeselected2, setImageDeselected2 ] = useState("");
    const [ imageDeselected3, setImageDeselected3 ] = useState("");
    const [ imageDeselected4, setImageDeselected4 ] = useState("");
    const [ imageDeselected5, setImageDeselected5 ] = useState("");
    const [ imageDeselected6, setImageDeselected6 ] = useState("");
    const [ imageDeselected7, setImageDeselected7 ] = useState("");

    const [ path, setPath ] = useState("");

    const [ isLoaded, setIsLoaded ] = useState(0);

    function initializeHandler(){
        setSelected("");
        setDeselectedText("");
        setText(SERVICES_TEXT);
        setColor(styles.servicesColor);
        setAnimateSelected("");
        setAnimateDeselected(styles.hide);
        setAnimateImagesDeselected(styles.hideImages);
        setGreyOut("");
        setHidePortraitMenu("");
        setShowPortraitContent("");
        setContentHead("");

        let path = '../../assets/Services/';
        setImage1(Services1);
        setImage2(Services2);
        setImage3(Services3);
        setImage4(Services4);
        setImage5(Services5);
        setImage6(Services6);
        setImage7(Services7);

        setPath(path);
    }

    useEffect(
        ()=>{
            if(refContainer.current !== null){
                props.positionHandler(refContainer.current.getBoundingClientRect().top);
                initializeHandler()
            }
        },[props.positionHandler]
    );

    useEffect(
        ()=>{
            if(props.dropped && refContainer.current.getBoundingClientRect().top < 46 * window.innerHeight/100){
                setGreyOut(styles.greyIn);
                return;
            }
            setGreyOut(styles.greyOut);
        },[props.dropped]
    );

    useEffect(
        ()=>{
            let path = '';
            switch (selected) {
                case "services":
                    path = '../../assets/Services/';

                    setImage1(Services1);
                    setImage2(Services2);
                    setImage3(Services3);
                    setImage4(Services4);
                    setImage5(Services5);
                    setImage6(Services6);
                    setImage7(Services7);              
                    setText(SERVICES_TEXT);
                    setColor(styles.servicesColor);
                    setPath(path);
                    break;

                case "id":
                    path = '../../assets/Services/IndustrialDesign'
                    setImage1(ID1);
                    setImage2(ID2);
                    setImage3(ID3);
                    setImage4(ID4);
                    setImage5(ID5);
                    setImage6(ID6);
                    setImage7(ID7);
                    setText(ID_TEXT);
                    setColor(styles.idColor);
                    setContentHead("Industrial Design");
                    setPath(path);
                    break;

                case "sd":
                    path = '../../assets/Services/SpaceDesign'
                    setImage1(SD1);
                    setImage2(SD2);
                    setImage3(SD3);
                    setImage4(SD4);
                    setImage5(SD5);
                    setImage6(SD6);
                    setImage7(SD7);
                    setText(SD_TEXT);
                    setColor(styles.sdColor);
                    setContentHead("Space Design");
                    setPath(path);
                    break;

                case "ux":
                    path = '../../assets/Services/UiUxDesign'
                    setImage1(UX1);
                    setImage2(UX2);
                    setImage3(UX3);
                    setImage4(UX4);
                    setImage5(UX5);
                    setImage6(UX6);
                    setImage7(UX7);
                    setText(UX_TEXT);
                    setColor(styles.uxColor);
                    setContentHead("UI / UX Design");
                    setPath(path);
                    break;
                    
                case "gd":
                    path = '../../assets/Services/GraphicsDesign'
                    setImage1(GD1);
                    setImage2(GD2);
                    setImage3(GD3);
                    setImage4(GD4);
                    setImage5(GD5);
                    setImage6(GD6);
                    setImage7(GD7);
                    setText(GD_TEXT);
                    setColor(styles.gdColor);
                    setContentHead("Graphics Design");
                    setPath(path);
                    break;

                case "branding":
                    path = '../../assets/Services/Branding'
                    setImage1(Branding1);
                    setImage2(Branding2);
                    setImage3(Branding3);
                    setImage4(Branding4);
                    setImage5(Branding5);
                    setImage6(Branding6);
                    setImage7(Branding7);
                    setText(BRANDING_TEXT);
                    setColor(styles.brandingColor);
                    setContentHead("Branding");
                    setPath(path);
                    break;

                case "pd":
                    path = '../../assets/Services/PackageDesign'
                    setImage1(PD1);
                    setImage2(PD2);
                    setImage3(PD3);
                    setImage4(PD4);
                    setImage5(PD5);
                    setImage6(PD6);
                    setImage7(PD7);
                    setText(PD_TEXT);
                    setColor(styles.pdColor);
                    setContentHead("Package Design");
                    setPath(path);
                    break;

                case "fd":
                    path = '../../assets/Services/FilmVideo'
                    setImage1(FV1);
                    setImage2(FV2);
                    setImage3(FV3);
                    setImage4(FV4);
                    setImage5(FV5);
                    setImage6(FV6);
                    setImage7(FV7);
                    setText(FD_TEXT);
                    setColor(styles.fdColor);
                    setContentHead("Film and Video");
                    setPath(path);
                    break;

                case "dm":
                    path = '../../assets/Services/DigitalMarketing'
                    setImage1(DM1);
                    setImage2(DM2);
                    setImage3(DM3);
                    setImage4(DM4);
                    setImage5(DM5);
                    setImage6(DM6);
                    setImage7(DM7);
                    setText(DM_TEXT);
                    setColor(styles.dmColor);
                    setContentHead("Digital Marketing");
                    setPath(path);
                    break;
            
                default:
                    break;
            }
        }, [selected]
    );

    useEffect(
        () => {
            
        }, []
    );

    function selectionHandler(event){
        if(window.innerWidth < 1279 && window.innerWidth/window.innerHeight <= 1){
            setHidePortraitMenu(styles.hidePortraitMenu)
            setShowPortraitContent(styles.showPortraitContent);
            window.scrollTo(0, window.innerHeight - 8 * window.innerHeight/100); // 8 * window.innerHeight/100 = 8vh = height of Navbar
        }

        
        setImageDeselected1(image1);
        setImageDeselected2(image2);
        setImageDeselected3(image3);
        setImageDeselected4(image4);
        setImageDeselected5(image5);
        setImageDeselected6(image6);
        setImageDeselected7(image7);

        setDeselectedText(text);
        setSelected(event.currentTarget.id);
        setAnimateSelected(styles.animateSelected);
        setAnimateDeselected(styles.animateDeselected);
        setAnimateImagesDeselected(styles.animateImagesDeselected);

        let timer = setTimeout(() => {
            setAnimateSelected("");
            setAnimateDeselected(styles.hide);
            setAnimateImagesDeselected(styles.hideImages);
            clearTimeout(timer);
        }, 1001);
        
    }
    
    function backHandler(){
        initializeHandler();
        window.scrollTo(0, window.innerHeight - 8 * window.innerHeight/100);
    }

    function loadingCompletionChecker(){
        setIsLoaded(prevState => prevState + 1);
    }

    // useEffect(
    //     ()=>{
    //         if(isLoaded === 63){ // 63 is the total number of images to be loaded.
    //             console.log(123);
    //         }
    //     }, [isLoaded]
    // );

    return(
        <div ref={ refContainer } className={styles.container} >

            <div className={[styles.itemsBox, hidePortraitMenu].join(" ")} >    
                <span id="services" className={[styles.header].join(" ")} onClick={selectionHandler} >
                    <div>Services</div>
                    <div className={ styles.servicesPortrait } >{ SERVICES_TEXT }</div>
                </span>
                <span id="id" className={[styles.item, (selected === "id" ? styles.selection : "")].join(" ")} onClick={selectionHandler} >Industrial Design <span className={styles.arrow} ></span></span>
                <span id="sd" className={[styles.item, (selected === "sd" ? styles.selection : "")].join(" ")} onClick={selectionHandler} >Space Design<span className={styles.arrow} ></span></span>
                <span id="ux" className={[styles.item, (selected === "ux" ? styles.selection : "")].join(" ")} onClick={selectionHandler} >UI / UX Design<span className={styles.arrow} ></span></span>
                <span id="gd" className={[styles.item, (selected === "gd" ? styles.selection : "")].join(" ")} onClick={selectionHandler} >Graphic Design<span className={styles.arrow} ></span></span>
                <span id="branding" className={[styles.item, (selected === "branding" ? styles.selection : "")].join(" ")} onClick={selectionHandler} >Branding<span className={styles.arrow} ></span></span>
                <span id="pd" className={[styles.item, (selected === "pd" ? styles.selection : "")].join(" ")} onClick={selectionHandler} >Package Design<span className={styles.arrow} ></span></span>
                <span id="fd" className={[styles.item, (selected === "fd" ? styles.selection : "")].join(" ")} onClick={selectionHandler} >Film and Video<span className={styles.arrow} ></span></span>
                <span id="dm" className={[styles.item, (selected === "dm" ? styles.selection : "")].join(" ")} onClick={selectionHandler} >Digital Marketing<span className={styles.arrow} ></span></span>
            </div> 

            <div className={[styles.content, showPortraitContent].join(" ")} >
                <div className={[styles.contentText, color, greying].join(" ")} >
                    <div className={styles.contentHeaderRow} >
                        <div className={styles.arrowLeft} onClick={backHandler} ></div>
                        <div className={styles.contentHead} >{contentHead}</div>
                    </div>
                    <div className={ animateSelected } >{ text }</div>
                    <div className={ animateDeselected } >{ deselectedText }</div>
                    <div className={styles.projectsLink} onClick={()=> props.history.push('/work')} >Projects &#10230;</div>
                </div>
                <div className={[styles.imageBox, animateSelected].join(" ") } >
        { isLoaded === 63 ? <>
                    <div className={styles.image1} >
                        <img alt="loading..." src={image1} className={styles.image} />
                    </div>
                    <div className={styles.otherImages} > 
                        <div className={styles.image2} >
                            <img alt="loading..." src={image2} className={styles.image}/>
                        </div>
                        <div className={styles.lowerImages} >
                            <div className={styles.image3} >
                                <img alt="loading..." src={image3} className={styles.image}/>
                            </div>
                            <div className={styles.remainingImages} >
                                <div className={styles.image4} >
                                    <img alt="loading..." src={image4} className={styles.image}/>
                                </div>
                                <div className={styles.threeImages} >
                                    <div className={styles.image5} >
                                        <img alt="loading..." src={image5} className={styles.image}/>   
                                    </div>
                                    <div className={styles.image5} >
                                     <img alt="loading..." src={image6} className={styles.image}/>
                                    </div>
                                    <div className={styles.image5} >
                                        <img alt="loading..." src={image7} className={styles.image}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></> : null } { /* Replace null by spinner if asked to add a loader */ }
                </div> 

                <div className={[styles.imageBox, animateImagesDeselected].join(" ") } >
                { isLoaded === 63 ? <>
                    <div className={styles.image1} >
                        <img alt="loading..." src={imageDeselected1} className={styles.image} />
                    </div>
                    <div className={styles.otherImages} >
                        <div className={styles.image2} >
                            <img alt="loading..." src={imageDeselected2} className={styles.image} />
                        </div>
                        <div className={styles.lowerImages} >
                            <div className={styles.image3} >
                                <img alt="loading..." src={imageDeselected3} className={styles.image} />
                            </div>
                            <div className={styles.remainingImages} >
                                <div className={styles.image4} >
                                    <img alt="loading..." src={imageDeselected4} className={styles.image} />
                                </div>
                                <div className={styles.threeImages} >
                                    <div className={styles.image5} >
                                        <img alt="loading..." src={imageDeselected5} className={styles.image} />   
                                    </div>
                                    <div className={styles.image5} >
                                     <img alt="loading..." src={imageDeselected6} className={styles.image} />
                                    </div>
                                    <div className={styles.image5} >
                                        <img alt="loading..." src={imageDeselected7} className={styles.image} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></> : null } { /* Replace null by spinner if asked to add a loader */ }
                </div>
    
                { hidePortraitMenu !== "" ?
                <div className={[styles.imageBoxPortrait].join(" ") } >
                { isLoaded === 63 ? <>
                    <div className={styles.imagePair} >
                        <div className={styles.image1Portrait} ><img alt="loading..." src={image1} className={styles.image} /></div>
                        <div className={styles.image23Portrait} >
                            <div className={styles.image2Portrait} ><img alt="loading..." src={image2} className={styles.image} /></div>
                            <div className={styles.image3Portrait} ><img alt="loading..." src={image3} className={styles.image} /></div>
                        </div>
                    </div>
                    <div className={styles.imagePair} >
                        <div className={styles.image4Portrait} ><img alt="loading..." src={image4} className={styles.image} /></div>
                        <div className={styles.image5Portrait} ><img alt="loading..." src={image5} className={styles.image} /></div>
                    </div>
                    <div className={styles.imagePair} >
                        <div className={styles.image6Portrait} ><img alt="loading..." src={image6} className={styles.image} /></div>
                        <div className={styles.image7Portrait} ><img alt="loading..." src={image7} className={styles.image} /></div>
                    </div></> : null } { /* Replace null by spinner if asked to add a loader */ }
                </div> : null }
                
            </div>

            <div style={{ position:"fixed", zIndex:"5", visibility:"none", pointerEvents:"none" }} >
                <img alt="loading" src={Services1} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Services2} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Services3} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Services4} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Services5} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Services6} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Services7} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />

                <img alt="loading" src={ID1} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={ID2} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={ID3} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={ID4} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={ID5} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={ID6} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={ID7} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />

                <img alt="loading" src={SD1} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={SD2} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={SD3} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={SD4} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={SD5} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={SD6} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={SD7} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />

                <img alt="loading" src={UX1} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={UX2} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={UX3} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={UX4} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={UX5} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={UX6} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={UX7} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />

                <img alt="loading" src={GD1} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={GD2} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={GD3} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={GD4} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={GD5} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={GD6} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={GD7} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />

                <img alt="loading..." src={image7} className={styles.image}/>
                <img alt="loading" src={Branding1} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Branding2} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Branding3} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Branding4} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Branding5} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Branding6} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={Branding7} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />

                <img alt="loading" src={PD1} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={PD2} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={PD3} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={PD4} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={PD5} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={PD6} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={PD7} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />

                <img alt="loading" src={FV1} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={FV2} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={FV3} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={FV4} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={FV5} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={FV6} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={FV7} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />

                <img alt="loading" src={DM1} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={DM2} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={DM3} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={DM4} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={DM5} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={DM6} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
                <img alt="loading" src={DM7} onLoad={loadingCompletionChecker} style={{ visibility:"none", height:"1px" }} />
            </div>
        </div>
    );
}

export default withRouter( Services );