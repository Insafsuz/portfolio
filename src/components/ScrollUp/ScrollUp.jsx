import { FaArrowUp } from 'react-icons/fa'
import './ScrollUp.scss'
import { Link } from 'react-scroll'

const ScrollUp = () => {
  return (
    <Link to='home' spy={true} smooth={true} duration={500} offset={0} className='scroll-up'>
      <FaArrowUp />
    </Link>
  )
}
export default ScrollUp
