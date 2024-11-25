

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

export default ContactInfo;