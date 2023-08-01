import './Contact.scss'

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <div class='container'>
        <h2 className='section__title'>Get in Touch</h2>
        <div className='contact__row'>
          <div className='contact__info info-contact'>
            <h3 className='info-contact__title'>Let's talk about everything!</h3>
            <p className='info-contact__text'>
              Don't like forms? Send me an <span>email</span>.
            </p>
          </div>
          <form action='' className='contact__form form-contact'>
            <div className='form-contact__group'>
              <div className='form-contact__item'>
                <input type='text' placeholder='Insert your name' className='form-contact__input' />
              </div>
              <div className='form-contact__item'>
                <input
                  type='email'
                  placeholder='Insert your email'
                  className='form-contact__input'
                />
              </div>
            </div>
            <div className='form-contact__item'>
              <input type='text' placeholder='Isert your subject' className='form-contact__input' />
            </div>
            <div className='form-contact__item'>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Write your message'
                className='form-contact__input'
              ></textarea>
            </div>
            <button className='form-contact__btn btn'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact
