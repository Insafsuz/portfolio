import './Portfolio.scss'

import Work1 from '../../assets/work-1.svg'
import Work2 from '../../assets/work-2.svg'
import Work3 from '../../assets/work-3.svg'
import Work4 from '../../assets/work-4.svg'
import Work5 from '../../assets/work-5.svg'
import Work6 from '../../assets/work-6.svg'
import { useState } from 'react'
import { SlLink } from 'react-icons/sl'

const Menu = [
  {
    id: 1,
    image: Work1,
    title: 'Project Management Illustration',
    category: 'Design',
  },
  {
    id: 2,
    image: Work2,
    title: 'Guest App Walkthrough Screens',
    category: 'Art',
  },
  {
    id: 3,
    image: Work3,
    title: 'Delivery App Wireframe',
    category: 'Branding',
  },
  ,
  {
    id: 4,
    image: Work4,
    title: 'Onboarding Motivation',
    category: 'Design',
  },
  ,
  {
    id: 5,
    image: Work5,
    title: 'iMac Mockup Design',
    category: 'Creative',
  },
  ,
  {
    id: 6,
    image: Work6,
    title: 'Game Store App Concept',
    category: 'Art',
  },
]

const Links = [
  { id: 1, title: 'Creative' },
  { id: 2, title: 'Art' },
  { id: 3, title: 'Design' },
  { id: 4, title: 'Branding' },
]

const Portfolio = () => {
  const [items, setItems] = useState(Menu)
  const [active, setActive] = useState(false)

  const filterItem = categoryItem => {
    const updatedItems = Menu.filter(curElem => {
      return curElem.category === categoryItem
    })
    setItems(updatedItems)
  }

  return (
    <section className='portfolio section' id='portfolio'>
      <div className='container'>
        <h2 className='section__title'>Recent Works</h2>
        <ul className='portfolio__menu menu-portfolio'>
          <li className='menu-portfolio__item' onClick={() => setItems(Menu)}>
            Everything
          </li>
          {Links.map(link => (
            <li
              className='menu-portfolio__item'
              key={link.id}
              onClick={() => filterItem(link.title)}
            >
              {link.title}
            </li>
          ))}
        </ul>
        <div className='portfolio__cards'>
          {items.map(item => (
            <div className='portfolio__card card-portfolio' key={item.id}>
              <div className='card-portfolio__thumbnail'>
                <img src={item.image} alt='' className='card-portfolio__img' />
                <div className='card-portfolio__mask'></div>
              </div>
              <span className='card-portfolio__category'>{item.category}</span>
              <h3 className='card-portfolio__title'>{item.title}</h3>
              <a href='#' className='card-portfolio__btn'>
                <SlLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Portfolio
