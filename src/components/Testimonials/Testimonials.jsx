import './Testimonials.scss'
import Image1 from '../../assets/avatar-1.svg'
import Image2 from '../../assets/avatar-2.svg'
import Image3 from '../../assets/avatar-3.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment:
      'I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍',
  },
  {
    id: 2,
    image: Image2,
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment:
      'I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍',
  },
  {
    id: 3,
    image: Image3,
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment:
      'I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍',
  },
]

const Testimonials = () => {
  return (
    <section className='testimonials section'>
      <div className='container'>
        <h2 className='section__title'>Clients & Review</h2>
        <Swiper
          className='testimonials__row'
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {data.map(item => (
            <SwiperSlide className='testimonials__item item-testimonials' key={item.id}>
              <img src={item.image} alt='' className='item-testimonials__img' />
              <h4 className='item-testimonials__title'>{item.title}</h4>
              <span className='item-testimonials__subtitle'>{item.subtitle}</span>
              <p className='item-testimonials__comment'>{item.comment}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default Testimonials
