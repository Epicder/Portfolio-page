import './Desktop.css'
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
import { useState } from 'react'
import { motion } from "framer-motion"


const Icons = (props) => {
    return (
        <div className="id-container">
            <div className={props.class}>
                <div className='icon-wrapper' onClick={props.onClick}>
                <img src={props.icon} alt="Windows Icon" />
                <p>{props.name}</p>
                </div>
                
            </div>    
        </div>
    ); 
}
  const Taskbar = (props) => {
    return (
        <>
        <div className='win-98-taskbar'>
            <div className='win-98-start-btn'> <img src={props.icon} alt="Power on icon" />
                <p>Start</p>
            </div>
            <div className='win-98-time-date'><p>11:28 PM</p></div>
        </div>
        </>
    ) 
  }

  const ClippyAsistant = (props) => {
    return (
        <>
        <div className='clippy-asistant'>
            <img src={props.icon}
             alt="Clippy asistant" />
        </div>
        </>
    )
}

const TextGlobe = (props) => {
    const handleTextGlobe = () => {
        props.onClose();
    };

    return (
        <div className="clippy-asistant">
            <div className="clippy-text-globe">
                <p>{props.text}</p>
                <button onClick={handleTextGlobe}>Got it!</button>
            </div>
        </div>
    );
};

const animationPropsProjects = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.6 }
};





const Projects = () => {
    return (
        
        <div className='projects-container'>

            <a href="https://github.com/Epicder/card-shootout-game" target="_blank">
            <div className='project-1'>
                <img src={Joystick} alt="Game Icon"/>      
                <h3>Card Shootout Game</h3>
                <p>(Dart, Flutter, Firebase)</p>
            </div>
            </a>

            <a href="https://epicder.github.io/penalty-card-landingpage/" target="_blank">
            <div className='project-2'>
            <img src={Html} alt="Page Icon"/>      
            <h3>Card Shootout Landing Page</h3>
            <p>(Html, Css, Js)</p> 
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
        
    )
}

export default function Desktop() {
    const [isTextGlobeVisible, setTextGlobeVisible] = useState(true);
    const [isExplorerVisible, setExplorerVisible] = useState(false);

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
                    <h2>{props.text}</h2>
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

    const hideTextGlobe = () => {
        setTextGlobeVisible(false);
    };

    const closeWindow = () => {
        setExplorerVisible(false);
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
                        text="Here you can take a look of my projects :)"
                        projects={Projects}
                    />
                </div>
            )}

            <motion.div {...animationProps}>
                <Icons class="id-proyects" name="My Projects" icon={Proyects} onClick={handleFrame} />
            </motion.div>
            <motion.div {...animationProps}>
                <Icons class="id-about-me" name="About Me.txt" icon={AboutMe} onClick={handleFrame}/>
            </motion.div>
            <motion.div {...animationProps}>
                <Icons class="id-contact" name="Contact.exe" icon={Contact} onClick={handleFrame}/>
            </motion.div>
            <motion.div {...animationProps}>
                <Icons class="id-tecnologies" name="Technologies I Use.exe" icon={Tecnologies} onClick={handleFrame}/>
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
