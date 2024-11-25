import './Desktop.css'
import './components/css/internet.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import { useEffect } from 'react'
import Draggable from 'react-draggable';

////////////// COMPONENTS ////////////

import Icons from './components/Icons'
import Taskbar from './components/Taskbar'
import ClippyAsistant from './components/ClippyAsistant'
import TextGlobe from './components/textGlobe'
import AboutMeInfo from './components/AboutMeInfo'
import ContactInfo from './components/ContactInfo'
import TechInfo from './components/TechInfo'

////////////// ASSETS ///////////////

import Proyects from './assets/folder.png'
import AboutMe from './assets/notepad.png'
import Contact from './assets/contact.png'
import Tecnologies from './assets/technologies.png'
import powerOn from './assets/power-on.png'
import Clippy from './assets/clippy.gif'
import Close from './assets/close-icon.png'
import Joystick from './assets/joystick.png'
import Html from './assets/html.png'
import Api from './assets/Api.png'
import AboutMeIcon from './assets/about-me-icon.png'
import ContactIcon from './assets/contact-icon.png'
import ProjectsIcon from './assets/project-icon.png'
import TechIcon from './assets/tech-icon.png'
import Me from './assets/me.jpg'

////////////////////////////////////

const animationPropsProjects = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.4 }
};

export default function Desktop() {

    useEffect(() => {
        const imagePaths = [
          Proyects,
          AboutMe,
          Contact,
          Tecnologies,
          powerOn,
          Clippy,
          Close,
          Joystick,
          Html,
          Api,
          AboutMeIcon,
          ContactIcon,
          ProjectsIcon,
          TechIcon,
          Me
        ];
    
        imagePaths.forEach((path) => {
          const img = new Image();
          img.src = path;
        });
      }, []);


const [isTextGlobeVisible, setTextGlobeVisible] = useState(true);
const [isExplorerVisible, setExplorerVisible] = useState(false);
const [isExplorerVisibleAboutMe, setExplorerVisibleAboutMe] = useState(false);
const [isExplorerVisibleContact, setExplorerVisibleContact] = useState(false);
const [isExplorerVisibleTech, setExplorerVisibleTech] = useState(false);
const [isInternetVisible, setInternetVisible] = useState(false);
const [isInternetVisible2, setInternetVisible2] = useState(false);
const [currentComponent, setCurrentComponent] = useState(null);
const [currentComponent2, setCurrentComponent2] = useState(null);    


const ExplorerWindow = (props) => {
    return (

        <div className='win-explorer-container'>
            <div className='win-explorer-frame'>
            <div className='win-explorer-top-bar'>
                    <button className='win-explorer-buttons'>
                        <img src={props.undefined} alt="-"/>
                    </button>
                    <button className='win-explorer-buttons' onClick={closeWindow}>
                        <img src={props.button3} alt="-"/>
                    </button>
                </div>
                <div className='win-explorer-content'>
                    <img src={props.iconsection} alt="Icon" className='icon-image'/><h2>{props.text}</h2>
                    <motion.div className='project-wrapper'{...animationPropsProjects}>
                        <div className='win-explorer-projects'>
                            {props.projects()}
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
        
    );
}

const Projects = () => {
    return (
        <>
        <div className='projects-container'>

            <a href="#" onClick={() => {setCurrentComponent("Internet"); setInternetVisible(true)}}>
            <div className='project-2'>
            <img src={Html} alt="Page Icon"/>      
            <h3>Uruguadle</h3>
            <p>(React, Js, css, html)</p> 
            </div>
            </a>

            <a href="#" onClick={() => {setCurrentComponent2("Internet"); setInternetVisible2(true)}}>
            <div className='project-2'>
            <img src={Html} alt="Page Icon"/>      
            <h3>Card Shootout Landing Page</h3>
            <p>(Html, Css, Js)</p> 
            </div>
            </a>

            <a href="https://github.com/Epicder/card-shootout-game" target="_blank">
            <div className='project-1'>
                <img src={Joystick} alt="Game Icon"/>      
                <h3>Card Shootout Game</h3>
                <p>(Dart, Flutter, Firebase)</p>
            </div>
            </a>

            <a href="https://github.com/AguilarJ11/holbertonschool-hbnb-db" target="_blank">
            <div className='project-3'>
            <img src={Api} alt="api Icon"/>
            <h3>AirBnb Clone Api</h3>
            <p>(Pyhton, Flask, Sqlite)</p>
            </div>
            </a>
        </div>
       </>   
    )
    
} 

const Internet = (props) => {
    return (
        <Draggable>
        <div className="internet-screen">
            <div className='internet-top-bar'>
            Internet Explorer
                    <button className='in-win-explorer-buttons' onClick={hideInternet}>
                        <img src={Close} alt="-"/>
                    </button>                 
              </div>
              <div className="internet-screen-content">

                <div className="internet-tools">
                  <p><span className='first-letter'>F</span>ile</p>
                  <p><span className='first-letter'>E</span>dit</p>
                  <p><span className='first-letter'>V</span>iew</p>
                  <p>F<span className='first-letter'>a</span>vorites</p>
                  <p><span className='first-letter'>H</span>elp</p>
                </div>
                
                <div className="internet-url-bar">
                    <a href={props.url} target='_blank'>
                    <button className='internet-url-bar-address'>Click to go to the original page</button>
                    </a>
                  <p>{props.url}</p>
                </div>
                <div className="internet-content">
                <iframe src={props.iframe} frameborder="1"></iframe>
                </div>
              </div>
        </div>
        </Draggable>
    )
}

    const hideTextGlobe = () => {
        setTextGlobeVisible(false);
    };

    const hideInternet = () => {
        setInternetVisible(false);
        setInternetVisible2(false);
    };

    const closeWindow = () => {
        setExplorerVisible(false);
        setExplorerVisibleAboutMe(false);
        setExplorerVisibleContact(false);
        setExplorerVisibleTech(false);
    }

    const animationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2.7 }
    };

    const animationProps2 = {
        initial: { opacity: 0, x: 0 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 2.7 }
    };

    const animationProps3 = {
        initial: { opacity: 0, scale: 0.1, x: 0 },
        animate: { opacity: 1, scale: 1, x: 0 },
        
        transition: { duration: 3.2 }
    };

    const handleFrame = () => {
        setExplorerVisible(true);
    };

    const handleFrameAboutMe = () => {
        setExplorerVisibleAboutMe(true);
    };

    const handleFrameContact = () => {
        setExplorerVisibleContact(true);
    };

    const handleFrameTech = () => {
        setExplorerVisibleTech(true);
    };

    

    return (
        <>
            {isTextGlobeVisible && (
                <motion.div {...animationProps3}>
                    <TextGlobe
                        text="Hi, welcome to my portfolio! Let's build something together! You can explore the sections of my portfolio by clicking on the icons on the desktop. Have a great day!"
                        onClose={hideTextGlobe}
                    />
                </motion.div>
            )}

            {isExplorerVisible && (
                <div>
                    <ExplorerWindow
                        button3={Close}
                        text="Take a look of my projects :)"
                        projects={() => (
                            <Projects setCurrentComponent={setCurrentComponent} />)}
                        iconsection={ProjectsIcon}
                    />
                </div>
            )}

            {currentComponent === "Internet" && isInternetVisible && (
                <Internet url="https://uruguadle.com/" iframe="https://uruguadle.com"/>
            )}

            {currentComponent2 === "Internet" && isInternetVisible2 && (
                    <Internet url="https://epicder.github.io/penalty-card-landingpage/" iframe="https://epicder.github.io/penalty-card-landingpage/"/>
            )}

            {isExplorerVisibleAboutMe && (
                <div>
                    <ExplorerWindow
                        button3={Close}
                        text="About Me"
                        projects={AboutMeInfo}
                        iconsection={AboutMeIcon}
                    />
                </div>
            )}

            {isExplorerVisibleContact && (
                <div>
                    <ExplorerWindow
                        button3={Close}
                        text="Contact"
                        projects={ContactInfo}
                        iconsection={ContactIcon}
                    />
                </div>
            )}

            {isExplorerVisibleTech && (
                <div>
                    <ExplorerWindow
                        button3={Close}
                        text="Technologies I Use"
                        projects={TechInfo}
                        iconsection={TechIcon}
                    />
                </div>
            )}
            
            <motion.div {...animationProps}>
                <Icons class="id-proyects" name="My Projects" icon={Proyects} onClick={handleFrame} />
            </motion.div>

            <motion.div {...animationProps}>
                <Icons class="id-about-me" name="About Me.txt" icon={AboutMe} onClick={handleFrameAboutMe}/>
            </motion.div>

            <motion.div {...animationProps}>
                <Icons class="id-contact" name="Contact.exe" icon={Contact} onClick={handleFrameContact}/>
            </motion.div>

            <motion.div {...animationProps}>
                <Icons class="id-tecnologies" name="Technologies I Use.exe" icon={Tecnologies} onClick={handleFrameTech}/>
            </motion.div>

            <motion.div {...animationProps2}>
                <Taskbar icon={powerOn} />
            </motion.div>

            <motion.div {...animationProps2}>
                <ClippyAsistant icon={Clippy} />
            </motion.div>
        </>
    );
}
