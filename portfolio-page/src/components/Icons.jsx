

 const Icons = (props) => {
  return (
      <>
          <div className="id-container">
          
          <div className={props.class}>
              <div className='icon-wrapper' onClick={props.onClick}>
              <img src={props.icon} alt="Windows Icon" />
              <p>{props.name}</p>
              </div>
              
          </div>    
      </div>
      
      </>
      
  ); 
}

export default Icons;