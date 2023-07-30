import { useState } from 'react'
import './Sidebar.scss'
import { CgClose } from 'react-icons/cg'
import {
  SlHome,
  SlUserFollowing,
  SlBriefcase,
  SlGraduation,
  SlLayers,
  SlNote,
  SlBubbles,
  SlMenu,
} from 'react-icons/sl'
import { Link } from 'react-scroll'

const Sidebar = () => {
  const [active, setActive] = useState(false)

  return (
    <aside className={`sidebar ${active ? 'active' : ''}`}>
      <a href='#' className='logo'>
        B<span>.</span>
      </a>
      <nav className='sidebar__menu menu-sidebar'>
        <ul className='menu-sidebar__list'>
          <li className='menu-sidebar__item'>
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='menu-sidebar__link'
            >
              <SlHome />
            </Link>
          </li>
          <li className='menu-sidebar__item'>
            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              className='menu-sidebar__link'
            >
              <SlUserFollowing />
            </Link>
          </li>
          <li className='menu-sidebar__item'>
            <Link
              to='services'
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              className='menu-sidebar__link'
            >
              <SlBriefcase />
            </Link>
          </li>
          <li className='menu-sidebar__item'>
            <Link
              to='resume'
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              className='menu-sidebar__link'
            >
              <SlGraduation />
            </Link>
          </li>
          <li className='menu-sidebar__item'>
            <Link
              to='portfolio'
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              className='menu-sidebar__link'
            >
              <SlLayers />
            </Link>
          </li>

          <li className='menu-sidebar__item'>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              className='menu-sidebar__link'
            >
              <SlBubbles />
            </Link>
          </li>
        </ul>
      </nav>
      <div className='sidebar__footer'>
        <span className='sidebar__copyright'>&copy; 2023 Bolby Template.</span>
      </div>
      <button
        className={`menu-button ${active ? 'active' : ''}`}
        onClick={() => setActive(!active)}
      >
        {active ? <CgClose /> : <SlMenu />}
      </button>
    </aside>
  )
}

export default Sidebar
