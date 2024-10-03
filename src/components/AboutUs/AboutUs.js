import React from 'react';
import styles from './AboutUs.module.css';
import PersonalCard from '../../UI/PersonalCard/PersonalCard';
import Footer from '../Footer/Footer';
import AshutoshMishra from '../../assets/AshutoshMishra.png';
import AarohDhoundiyal from '../../assets/AarohDhoundiyal.png';
import AsmitaMishra from '../../assets/AsmitaMishra.png';
import PiyushSoni from '../../assets/PiyushSoni.png';
import BhushanBhaskar from '../../assets/BhushanBhaskar.png';
import AdithyaVishnuM from '../../assets/AdithyaVishnuM.png';
import SiddhantBhattacharya from '../../assets/SiddhantBhattacharya.jpg';

const AboutUs = (props) =>{

    const ASHUTOSH_MISHRA_TEXT = "With a degree in Masters of Industrial Design from Politecnico Di Milano, Italy. Ashutosh brings a wide perspective and skillsets, from producing films and music to Industrial Design. His creative vision builds the foundation of Desmantle Studios.";
    
    const AAROH_DHOUNDIYAL_TEXT = "An Expert Design Strategist and Systems Thinker. Aaroh mastered the process of delivering Design from concept to production with over a dozen products that have reached the markets. He leads Desmantle’s vision of driving positive disruption.";
    
    const ASMITA_MISHRA_TEXT = "Having a decade-long experience in business operations, Asmita brings her problem-solving attitude that eases the challenges faced by the company and gives guidance and support to the team.";
    
    const PIYUSH_SONI_TEXT = "With over a decade of experience in various business segments, Piyush holds a strong background in insights and operations. He embraces life challenges with a head-on determination to come out on top and not let it vanquish his vision.";
    
    const BHUSHAN_BASARKAR_TEXT = "With his technical expertise in Industrial & Product design, bhushan brings his keen sense of design, creativity, and problem-solving to the team, this makes him the go-to person for any Design & Digital project in the company.";
    
    const ADITHYA_VISHNU_M_TEXT = "Fuelled by the passion to understand how things are, how they work, and how they can be improved; Adhithya brings a combination of passion & curiosity to every project and the Desmantle team.";
    
    const SIDDHANT_BHATTACHARYA_TEXT = "A content-hungry & curious soul who believes in the philosophy of Imagine, Gather & Create, Siddhant comes with the experience of 3 years in the Direct and Digital Marketing domain as a campaign Strategist and brings this experience & creativity to the team.";

     return(
        <div className={styles.container} >
            <div className={styles.textContainer} >
                <div className={styles.mainHead} >About Us</div>
                <div className={styles.companyName} >INDIAN DESIGN COMPANY</div>   
                <p className={styles.description1} >Desmantle sprouted from the vision to redefine the way people interact with the world around them with innovative systems, products and visuals.</p>                 
                <p className={styles.description2} >At Desmantle, we are trying to define and spearhead ‘Indian Design’ of tomorrow. The past inspires us but our eyes are set on the horizon, designing for the Future.</p>  
                <p className={styles.teamHead} >Team</p>               
                <p className={styles.teamHeadPortrait} >Our Team</p>               
            </div>
            <div className={styles.cardsRow} >

                <PersonalCard 
                            photo = {AshutoshMishra} 
                            name = {"Ashutosh Mishra"}
                            designation = {"Founder & Director"} 
                            description = { ASHUTOSH_MISHRA_TEXT } />

                <PersonalCard 
                            raise = {true}
                            photo = {AarohDhoundiyal} 
                            name = {"Aaroh Dhoundiyal"}
                            designation = {"Founder & Director"} 
                            description = { AAROH_DHOUNDIYAL_TEXT } />

             { /*   <PersonalCard 
                            photo = {AsmitaMishra} 
                            name = {"Asmita Mishra"}
                            designation = {"Managing Partner"} 
                            description = { ASMITA_MISHRA_TEXT } />

                <PersonalCard 
                            photo = {PiyushSoni} 
                            name = {"Piyush Soni"}
                            designation = {"Managing Partner"} 
                            description = { PIYUSH_SONI_TEXT } />

                <PersonalCard 
                            raise = {true}
                            photo = {BhushanBhaskar} 
                            name = {"Bhushan Basarkar"}
                            designation = {"Lead Designer"} 
                            description = { BHUSHAN_BASARKAR_TEXT } />

                <PersonalCard 
                            photo = {AdithyaVishnuM} 
                            name = {"Adithya Vishnu M"}
                            designation = {"Product Designer"} 
                            description = { ADITHYA_VISHNU_M_TEXT } />

                <PersonalCard 
                            photo = {SiddhantBhattacharya} 
                            name = {"Siddhant Bhattacharya"}
                            designation = {"Digital Marketing Executive"} 
                            description = { SIDDHANT_BHATTACHARYA_TEXT } /> */}
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;