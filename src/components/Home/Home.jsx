import './Home.scss'
import Socials from './Socials'
import Me from '../../assets/avatar-1.svg'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
  const [text] = useTypewriter({
    words: ['Front-End developer', 'Designer', 'Photographer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  })

  return (
    <section className='home' id='home'>
      <div className='intro'>
        <img src={Me} alt='' className='intro__img' />
        <h1 className='intro__name'>Bolby Doe</h1>
        <p className='intro__edocation'>
          I'm a <span>{text}</span>{' '}
          <span>
            <Cursor cursorStyle={'|'} />
          </span>
        </p>
        <Socials />
        <a href='#' className='intro__btn btn'>
          Hire Me
        </a>
      </div>
      <Shapes />
      <ScrollDown />
    </section>
  )
}

export default Home
