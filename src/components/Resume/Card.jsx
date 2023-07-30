import { SlBriefcase, SlGraduation } from 'react-icons/sl'

const Card = ({ value, icon }) => {
  return (
    <div className='timeline-resume__card'>
      <div className='timeline-resume__icon'>
        {icon === 'education' ? <SlGraduation /> : <SlBriefcase />}
      </div>
      <span className='timeline-resume__date'>{value.year}</span>
      <h3 className='timeline-resume__title'>{value.title}</h3>
      <p className='timeline-resume__text'>{value.text}</p>
    </div>
  )
}
export default Card
