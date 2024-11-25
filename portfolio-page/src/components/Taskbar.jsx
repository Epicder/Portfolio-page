
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

export default Taskbar;