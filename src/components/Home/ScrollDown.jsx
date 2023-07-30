import { Link } from 'react-scroll'

const ScrollDown = () => {
  return (
    <Link to='about' spy={true} smooth={true} duration={500} offset={20} className='scroll-down'>
      <p className='scroll-down__text'>Scroll Down</p>
      <span className='mouse'>
        <span className='wheel'></span>
      </span>
    </Link>
  )
}
export default ScrollDown
