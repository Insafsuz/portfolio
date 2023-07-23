import './Sidebar.scss'
import {
  SlHome,
  SlUserFollowing,
  SlBriefcase,
  SlGraduation,
  SlLayers,
  SlNote,
  SlBubbles,
} from 'react-icons/sl'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <a href='#' className='logo'>
        B<span>.</span>
      </a>
      <nav className='sidebar__menu menu-sidebar'>
        <ul className='menu-sidebar__list'>
          <li className='menu-sidebar__item'>
            <a href='#home' className='menu-sidebar__link'>
              <SlHome />
            </a>
          </li>
          <li className='menu-sidebar__item'>
            <a href='#about' className='menu-sidebar__link'>
              <SlUserFollowing />
            </a>
          </li>
          <li className='menu-sidebar__item'>
            <a href='#services' className='menu-sidebar__link'>
              <SlBriefcase />
            </a>
          </li>
          <li className='menu-sidebar__item'>
            <a href='#resume' className='menu-sidebar__link'>
              <SlGraduation />
            </a>
          </li>
          <li className='menu-sidebar__item'>
            <a href='#portfolio' className='menu-sidebar__link'>
              <SlLayers />
            </a>
          </li>
          <li className='menu-sidebar__item'>
            <a href='#blog' className='menu-sidebar__link'>
              <SlNote />
            </a>
          </li>
          <li className='menu-sidebar__item'>
            <a href='#contact' className='menu-sidebar__link'>
              <SlBubbles />
            </a>
          </li>
        </ul>
      </nav>
      <div className='sidebar__footer'>
        <span className='sidebar__copyright'>&copy; 2023 Bolby Template.</span>
      </div>
    </aside>
  )
}

export default Sidebar
