
import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import Navbar from './UI/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Work from './components/Work/Work';
import Inspiration from './components/Inspiration/Inspiration';
import { Route, Switch } from 'react-router-dom';

function App(props) {

  const [ hover, setHover ] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [lettersScreen, setLettersScreen] = useState(false);
  const [ scrollToServicesHit, setScrollToServicesHit ] = useState(false);
  const [ scrollToContactUsHit, setScrollToContactUsHit ] = useState(false);

  const refContainer = useRef(null);
  const [ appPosX, setAppPosX ] = useState(0); // keeps track of homepage position on ios devices.
  const [ appPosY, setAppPosY ] = useState(0); // keeps track of homepage position on ios devices.

  const HOME = <Home setHover = {setHover}
              hover = {hover}
              dropped = {dropped}
              setLettersScreen = {setLettersScreen}
              setScrollToServicesHit = {setScrollToServicesHit}
              scrollToServicesHit = {scrollToServicesHit}
              setScrollToContactUsHit = {setScrollToContactUsHit}
              scrollToContactUsHit = {scrollToContactUsHit} />

   function preventPageScrollHandler(){
      // if(refContainer.current.getBoundingClientRect().top > 0 || refContainer.current.getBoundingClientRect().left !== 0){
      //   refContainer.current.style.left = 0;
      //   refContainer.current.style.top = 0;
      // }

   }

   function closeAndroidSoftKeyboard(){
    document.activeElement.blur();
  }

   useEffect(
     () => {
        document.addEventListener("touchmove", closeAndroidSoftKeyboard);

      return () => {
        document.removeEventListener("touchmove", closeAndroidSoftKeyboard);
      }
     }, []
   );


  return (
    <div className="App" ref={refContainer} onTouchMove={preventPageScrollHandler} > {/* for iOS devices */}

        <Navbar setHover = {setHover}
                dropped = {dropped}
                setDropped = {setDropped}
                transparent = { lettersScreen }
                setLettersScreen = {setLettersScreen}
                setScrollToServicesHit = {setScrollToServicesHit}
                setScrollToContactUsHit = {setScrollToContactUsHit} />

        

        <Switch>
          <Route path="/" exact render={(props) => (
                                                    HOME )}
                                                      />
          <Route path="/services" exact render={(props) => (
                                                    HOME )}
                                                      />
          <Route path="/contact" exact render={(props) => (
                                                    HOME )}
                                                      />
          <Route path="/work" exact component={Work} />
          <Route path="/inspiration" exact component={Inspiration} />
          <Route path="/about" exact component={AboutUs} />
        </Switch>
        
    </div>
  );
}

export default App;