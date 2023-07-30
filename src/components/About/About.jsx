import Image from '../../assets/avatar-2.svg'
import './About.scss'
import AboutDetails from './AboutDetails'

const About = () => {
  return (
    <section className='about section' id='about'>
      <div className='container'>
        <h2 className='about__title section__title'>About Me</h2>
        <div className='about__row'>
          <img src={Image} alt='person' className='about__img' />
          <div className='about__info info-about'>
            <div className='info-about__description'>
              <p className='info-about__text'>
                I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in
                web site design and building and customization, also I am good at WordPress.
              </p>
              <a href='#' className='info-about__btn btn'>
                Download CV
              </a>
            </div>
            <div className='info-about__skills skills-info-about'>
              <div className='skills-info-about__column'>
                <div className='skills-info-about__skill'>
                  <h4 className='skills-info-about__title'>Development</h4>
                  <div className='skills-info-about__percent'>85%</div>
                </div>
                <div className='skills-info-about__progress'>
                  <div
                    className='skills-info-about__bar'
                    style={{ width: '85%', backgroundColor: '#ffd15c' }}
                  ></div>
                </div>
              </div>
              <div className='skills-info-about__column'>
                <div className='skills-info-about__skill'>
                  <h4 className='skills-info-about__title'>UI/UX Design</h4>
                  <div className='skills-info-about__percent'>95%</div>
                </div>
                <div className='skills-info-about__progress'>
                  <div
                    className='skills-info-about__bar'
                    style={{ width: '95%', backgroundColor: '#ff4c60' }}
                  ></div>
                </div>
              </div>
              <div className='skills-info-about__column'>
                <div className='skills-info-about__skill'>
                  <h4 className='skills-info-about__title'>Photography</h4>
                  <div className='skills-info-about__percent'>70%</div>
                </div>
                <div className='skills-info-about__progress'>
                  <div
                    className='skills-info-about__bar'
                    style={{ width: '70%', backgroundColor: '#6c6ce5' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutDetails />
      </div>
    </section>
  )
}
export default About
