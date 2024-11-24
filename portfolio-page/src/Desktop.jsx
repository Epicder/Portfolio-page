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
import AboutMeIcon from './assets/about-me-icon.png'
import ContactIcon from './assets/contact-icon.png'
import ProjectsIcon from './assets/project-icon.png'
import TechIcon from './assets/tech-icon.png'
import Me from './assets/me.jpg'
import { useState } from 'react'
import { motion } from "framer-motion"
import { useEffect } from 'react'
import './components/css/internet.css'

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
    transition: { duration: 1.4 }
};


const AboutMeInfo = () => {
    return (
        <div className='about-me-container'>
            <img src={Me} alt="Me" className='me-image'/>
            <p className='about-me-text'>
                Hey! I’m <span className="highlight">Elián</span>, a <span className="highlight">Full-Stack Developer</span>. <br /> <br /> I’ve been fascinated by computers, hardware, game development, and all the IT stuff since I was a kid. 
                People call me <span className="highlight">creative</span> and I love to  <span className="highlight">mix that creativity with tech</span> to build different solutions. <br /><br />
                I’m drawn to the <span className="highlight">artistic side of technology</span>, and I’m passionate about creating things that are not only functional but also  <span className="highlight">beautiful.</span> <br /><br /> 
                I’m also someone who loves to explore <span className="highlight">alternative ways</span> and find new approaches to solve problems. 
                That’s why I’m always looking to <span className="highlight">learn, grow and push</span> the limits of what’s possible. <br /><br /> 
                I’ve always loved creating videogames, but nowadays, i keep game development as a hobby, while focusing on <span className="highlight">creating innovative things </span>
                with the technologies I work with. <br /><br /> However, the influence of game development and <span className="highlight">user experience</span> continues to have an indirect impact on the projects I create.
            </p>
        </div>

    )
}


const ContactInfo = () => {
    return (
        <div className='contact-info'>
            <a href="mailto:epicder12@gmail.com">
            <div className='contact-button'>
                <h3>📧 Email:&nbsp;</h3>
                <p>
                    epicder12@gmail.com
                </p>
            </div>
            </a>
            <a href="https://github.com/Epicder" target="_blank">
            <div className='contact-button'>
                <h3>🐱‍💻 Github:&nbsp;</h3>

                <p>
                    Epicder
                </p>
                
            </div>
            </a>
            <a href="https://www.linkedin.com/in/epicder/" target="_blank">
            <div className='contact-button'>
                <h3>🔗 LinkedIn:&nbsp;</h3> 
                <p>
                    Elián González
                </p>  
            </div>
            </a>
        </div>
    )
}

const TechInfo = () => {
    return (
        <div className='tech-info'>
            <h2>🔧 FrontEnd</h2>
            <div className='tech-button'>
                
                <p>
                    React, JavaScript, TypeScript, Html, Css, Flutter
                </p>
            </div>
            <h2>🔨 BackEnd</h2>
            <div className='tech-button'>
                
                <p>
                    Node.js, Express, Python, Flask, Firebase(Firestore, Auth, Storage)
                </p>
            </div>
            <h2>📦 Enviroment/Tools</h2>
            <div className='tech-button'>
                <h3></h3>
                <p>
                    Git, Github, VSCode, Android Studio, Figma, Adobe Photoshop
                </p>
                </div>
        </div>
    )
}

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
    const [currentComponent, setCurrentComponent] = useState(null);


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

            <a href="https://epicder.github.io/penalty-card-landingpage/" target="_blank">
            <div className='project-2'>
            <img src={Html} alt="Page Icon"/>      
            <h3>Uruguadle</h3>
            <p>(React, Js, css, html)</p> 
            </div>
            </a>

            <a href="https://epicder.github.io/penalty-card-landingpage/" target="_blank">
            <div className='project-2'>
            <img src={Html} alt="Page Icon"/>      
            <h3>Card Shootout Landing Page</h3>
            <p>(Html, Css, Js)</p> 
            </div>
            </a>

            <a href="#" onClick={() => setCurrentComponent("Internet")}>
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
        <div className="internet-screen">
            <div className='internet-top-bar'>
                    <button className='win-explorer-buttons'>
                        <img src={Close} alt="-"/>
                    </button>
                    <button className='win-explorer-buttons'>
                        <img src={Close} alt="-"/>
                    </button>
              </div>
              <div className="internet-screen-content">

                <div className="internet-tools">
                  <p>File</p>
                  <p>Edit</p>
                  <p>View</p>
                  <p>Favorites</p>
                  <p>Help</p>
                </div>
                
                <div className="internet-url-bar">
                  <p>Addres:</p>
                  <p>{props.url}</p>
                </div>
                <div className="internet-content">

                </div>
              </div>
        </div>
    )
}

    const hideTextGlobe = () => {
        setTextGlobeVisible(false);
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

            {currentComponent === "Internet" && (
                <Internet url="https://epicder.github.io/penalty-card-landingpage/" />
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
