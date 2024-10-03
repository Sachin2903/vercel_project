import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.svg';
import { withRouter } from 'react-router-dom';

const Navbar = (props) =>{

    const firstRender = useRef(true);
    const [ rotate90, setRotate90 ] = useState("");
    const [ animateMenu, setAnimateMenu ] = useState("");
    const [ animateMenuHome, setAnimateMenuHome ] = useState("");
    const [ animateMenuAbout, setAnimateMenuAbout ] = useState("");
    const [ animateMenuWork, setAnimateMenuWork ] = useState("");
    const [ animateMenuServices, setAnimateMenuServices ] = useState("");
    const [ animateMenuInspiration, setAnimateMenuInspiration ] = useState("");
    const [ animateMenuStories, setAnimateMenuStories ] = useState("");
    const [ animateMenuContactUs, setAnimateMenuContactUs ] = useState("");


    useEffect(
        ()=>{
            
            if(firstRender.current){
    
                firstRender.current = false;     
                navigateToServicesOrContact();
                return;
            }

            if(props.dropped){
                setAnimateMenu(styles.makeOpaque);
                setAnimateMenuHome(styles.menuInHome);
                setAnimateMenuAbout(styles.menuInAbout);
                setAnimateMenuWork(styles.menuInWork);
                setAnimateMenuServices(styles.menuInServices);
                setAnimateMenuInspiration(styles.menuInInspiration);
                setAnimateMenuStories(styles.menuInStories);
                setAnimateMenuContactUs(styles.menuInContactUs);
            }

            else{
                 setAnimateMenu(styles.makeTransparent);
                 setAnimateMenuHome(styles.menuOutHome);
                 setAnimateMenuAbout(styles.menuOutAbout);
                 setAnimateMenuWork(styles.menuOutWork);
                 setAnimateMenuServices(styles.menuOutServices);
                 setAnimateMenuInspiration(styles.menuOutInspiration);
                 setAnimateMenuStories(styles.menuOutStories);
                 setAnimateMenuContactUs(styles.menuOutContactUs);
            }


        }, [props.dropped]

    );

    function hoverHandler(val){
        props.setHover(val);
    }

    function dropDownHandler(){
        props.setDropped( prevState => !prevState )
        setRotate90( props.dropped ?  styles.rotateReverse90 : styles.rotate90 );
    }

    function navigateToServicesOrContact(val){
        if(props.history.location.pathname === '/services' || val === 'services'){
            props.history.push('/services');
            props.setScrollToServicesHit(true);
        }

        if(props.history.location.pathname === '/contact' || val === 'contact'){
            props.history.push('/contact');
            props.setScrollToContactUsHit(true);
        }
    }

    function navigationHandler(event){
        event.preventDefault();
        let id = event.target.id;
        switch(id){
               case "logo":
               case "home":
                   props.history.push('/');
                   props.history.go(0);
                   break;

               case "about":
                   props.setLettersScreen(false);
                   props.history.push('/about');
                   window.scrollTo(0, 0);
                   break;

               case "work":
                   props.setLettersScreen(false);
                   props.history.push('/work');
                   window.scrollTo(0, 0);
                   break;

               case "services":
                    navigateToServicesOrContact("services");
                   break;

               case "inspiration":
                   props.setLettersScreen(false);
                   props.history.push('/inspiration');
                   window.scrollTo(0, 0);
                   break;

               case "contact":
                   navigateToServicesOrContact("contact");
                   break;

                default:
        }

        dropDownHandler();
          
    }
    
    return(
        <div className={[styles.container, ( props.transparent ? styles.transparent : "")].join(" ")} >
            <img id="logo" alt="loading..." src={Logo} className={[ styles.logo, ( props.transparent ? styles.hide : "")].join(" ")} onClick={navigationHandler} />
            <div className={[styles.hamburgerIcon, rotate90, ( props.transparent ? styles.lettersHamburger : "")].join(" ")} onClick={dropDownHandler} onMouseEnter={() => hoverHandler(true)} onMouseLeave={()=> hoverHandler(false)} >
                <div className={ styles.burgerBar } ></div>
                <div className={ styles.burgerBar } ></div>
                <div className={ styles.burgerBar } ></div>
            </div>
            <ul className={[styles.menu, animateMenu, ( props.transparent ? styles.shift : "" )].join(" ")} >
                <li id="home" className={[styles.menuItem, animateMenuHome].join(" ")} onClick={navigationHandler} >Home</li>
                <li id="about" className={[styles.menuItem, animateMenuAbout].join(" ")} onClick={navigationHandler}  >About</li>
                <li id="work" className={[styles.menuItem, animateMenuWork].join(" ")} onClick={navigationHandler} >Work</li>
                <li id="services" className={[styles.menuItem, animateMenuServices].join(" ")} onClick={navigationHandler} >Services</li>
                <li id="inspiration" className={[styles.menuItem, animateMenuInspiration].join(" ")} onClick={navigationHandler} >Inspiration</li>
                {/* <li id="stories" className={[styles.menuItem, animateMenuStories].join(" ")} onClick={navigationHandler} >Stories</li> */}
                <li id="contact" className={[styles.menuItem, animateMenuContactUs].join(" ")} onClick={navigationHandler} >Contact Us</li>
            </ul>
            
        </div>
    );
}

export default withRouter( Navbar );