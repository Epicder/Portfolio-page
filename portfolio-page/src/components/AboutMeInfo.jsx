import Me from '../assets/me.jpg'

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

export default AboutMeInfo;