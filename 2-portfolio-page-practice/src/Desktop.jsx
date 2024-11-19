import './Desktop.css'
import Proyects from './assets/folder.png'
import AboutMe from './assets/notepad.png'
import Contact from './assets/contact.png'
import Tecnologies from './assets/technologies.png'
import powerOn from './assets/power-on.png'

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
        </div>
        </>
    ) 
  }
export default function Desktop() {
    return (
        <> 
            <Icons class="id-proyects" name="My Proyects" icon={Proyects}/>
            <Icons class="id-about-me" name="About Me.txt" icon={AboutMe}/>
            <Icons class="id-contact" name="Contact.exe" icon={Contact}/>
            <Icons class="id-tecnologies" name="Technologies I Use.exe" icon={Tecnologies}/>

            <Taskbar icon={powerOn}/>
        </>

    ) 
  }
