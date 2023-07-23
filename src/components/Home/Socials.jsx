import './Home.scss'
import { FaBehance, FaDribbble, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

const Socials = () => {
  return (
    <ul className='socials-list'>
      <li className='socials-list__item'>
        <a href='https://instagram.com/' target='_blank' className='socials-list__link'>
          <FaInstagram />
        </a>
      </li>
      <li className='socials-list__item'>
        <a href='https://twitter.com/' target='_blank' className='socials-list__link'>
          <FaTwitter />
        </a>
      </li>
      <li className='socials-list__item'>
        <a href='https://behance.com/' target='_blank' className='socials-list__link'>
          <FaBehance />
        </a>
      </li>
      <li className='socials-list__item'>
        <a href='https://dribbble.com/' target='_blank' className='socials-list__link'>
          <FaDribbble />
        </a>
      </li>
      <li className='socials-list__item'>
        <a href='https://pinterest.com/' target='_blank' className='socials-list__link'>
          <FaPinterest />
        </a>
      </li>
    </ul>
  )
}

export default Socials
