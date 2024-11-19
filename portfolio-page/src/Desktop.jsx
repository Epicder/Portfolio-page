import './Desktop.css'
import Proyects from './assets/folder.png'
import AboutMe from './assets/notepad.png'
import Contact from './assets/contact.png'
import Tecnologies from './assets/technologies.png'
import powerOn from './assets/power-on.png'
import Clippy from './assets/clippy.gif'
import { useState } from 'react';

const Icons = (props) => {
    return (
        <>
        <div class="id-container">
            <div className={props.class}><img src={props.icon} alt="Windows Icon" /><p>{props.name}</p></div>    
        </div>
        </>
    ) 
  };

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



export default function Desktop() {
    const [isTextGlobeVisible, setTextGlobeVisible] = useState(true);

    const hideTextGlobe = () => {
        setTextGlobeVisible(false);
    };

    return (
        <>
            {isTextGlobeVisible && (
                <TextGlobe
                    text="Hi, welcome to my portfolio! Let's build something together! You can explore the sections of my portfolio by clicking on the icons on the desktop. Have a great day!"
                    onClose={hideTextGlobe}
                />
            )}


            <Icons class="id-proyects" name="My Projects" icon={Proyects} />
            <Icons class="id-about-me" name="About Me.txt" icon={AboutMe} />
            <Icons class="id-contact" name="Contact.exe" icon={Contact} />
            <Icons class="id-tecnologies" name="Technologies I Use.exe" icon={Tecnologies} />

            <Taskbar icon={powerOn} />
            <ClippyAsistant icon={Clippy} />
        </>
    );
}
