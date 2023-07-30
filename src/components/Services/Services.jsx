import './Services.scss'

import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
  {
    id: 1,
    img: Image1,
    title: 'UI/UX design',
    text: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
  },
  {
    id: 2,
    img: Image2,
    title: 'Web Development',
    text: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
  },
  {
    id: 3,
    img: Image3,
    title: 'Photography',
    text: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
  },
]

const Services = () => {
  return (
    <section className='services section' id='services'>
      <div className='container'>
        <h2 className='section__title'>Services</h2>
        <div className='services__row'>
          {data.map(({ id, img, title, text }) => (
            <div className='services__card' key={id}>
              <div className='services__item item-services'>
                <img src={img} alt='' className='item-services__img' />
                <h4 className='item-services__title'>{title}</h4>
                <p className='item-services__text'>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className='services__text'>
          Looking for a custom job? <a href='#'>Click here</a> to contact me! 👋
        </p>
      </div>
    </section>
  )
}
export default Services
