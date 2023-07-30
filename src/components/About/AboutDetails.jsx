import { SlBadge, SlCup, SlFire, SlPeople } from 'react-icons/sl'

const AboutDetails = () => {
  return (
    <div className='about__details'>
      <div className='about__item item-about'>
        <SlFire className='item-about__icon' />
        <div className='item-about__info'>
          <div className='item-about__number'>198</div>
          <p className='item-about__text'>Projects completed</p>
        </div>
      </div>
      <div className='about__item item-about'>
        <SlCup className='item-about__icon' />
        <div className='item-about__info'>
          <div className='item-about__number'>5670</div>
          <p className='item-about__text'>Cup of coffee</p>
        </div>
      </div>
      <div className='about__item item-about'>
        <SlPeople className='item-about__icon' />
        <div className='item-about__info'>
          <div className='item-about__number'>427</div>
          <p className='item-about__text'>Satisfied clients</p>
        </div>
      </div>
      <div className='about__item item-about'>
        <SlBadge className='item-about__icon' />
        <div className='item-about__info'>
          <div className='item-about__number'>35</div>
          <p className='item-about__text'>Nominees winner</p>
        </div>
      </div>
    </div>
  )
}
export default AboutDetails
