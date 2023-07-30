import './Pricing.scss'

import Image1 from '../../assets/price-1.svg'
import Image2 from '../../assets/price-2.svg'
import Image3 from '../../assets/price-3.svg'

const Pricing = () => {
  return (
    <section className='pricing section'>
      <div className='container'>
        <h2 className='section__title'>Pricing Plans</h2>
        <div className='pricing__row'>
          <div className='pricing__card card-pricing'>
            <img src={Image1} alt='' className='card-pricing__img' />
            <h3 className='card-pricing__title'>Basic</h3>
            <p className='card-pricing__text'>
              A Simple option but powerful to manage your business
            </p>
            <p className='card-pricing__subtitle'>Email support</p>
            <p className='card-pricing__price'>
              <em>$</em>9<span>Month</span>
            </p>
            <a href='#' className='card-pricing__btn btn'>
              Get Started
            </a>
          </div>
          <div className='pricing__card card-pricing'>
            <img src={Image2} alt='' className='card-pricing__img' />
            <h3 className='card-pricing__title'>Premium</h3>
            <p className='card-pricing__text'>
              Unlimited product including apps integrations and more features
            </p>
            <p className='card-pricing__subtitle'>Mon-Fri support</p>
            <p className='card-pricing__price'>
              <em>$</em>49<span>Month</span>
            </p>
            <a href='#' className='card-pricing__btn btn'>
              Get Started
            </a>
          </div>
          <div className='pricing__card card-pricing'>
            <img src={Image3} alt='' className='card-pricing__img' />
            <h3 className='card-pricing__title'>Ultimate</h3>
            <p className='card-pricing__text'>A wise option for large companies and individuals</p>
            <p className='card-pricing__subtitle'>24/7 support</p>
            <p className='card-pricing__price'>
              <em>$</em>99<span>Month</span>
            </p>
            <a href='#' className='card-pricing__btn btn'>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Pricing
