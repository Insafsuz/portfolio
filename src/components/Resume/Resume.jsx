import Card from './Card'
import './Resume.scss'

const data = [
  {
    id: 1,
    category: 'education',
    year: '2019 - present',
    title: 'Academic Degree',
    text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 2,
    category: 'education',
    year: '2013 - 2017',
    title: "Bachelor's Degree",
    text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 3,
    category: 'education',
    year: '2009 - 2013',
    title: 'Honours Degree',
    text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 4,
    category: 'experience',
    year: '2019 - present',
    title: 'Web Designer',
    text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 5,
    category: 'experience',
    year: '2013 - 2017',
    title: 'Front-End Developer',
    text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 6,
    category: 'experience',
    year: '2009 - 2013',
    title: 'Back-End Developer',
    text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
]

const Resume = () => {
  return (
    <section className='resume section' id='resume'>
      <div className='container'>
        <h2 className='section__title'>Experience</h2>
        <div className='resume__row'>
          <div className='resume__timeline timeline-resume'>
            {data.map((value, id) => {
              if (value.category === 'education') {
                return <Card key={id} value={value} icon='education' />
              }
            })}
          </div>
          <div className='resume__timeline timeline-resume'>
            {data.map((value, index) => {
              if (value.category === 'experience') {
                return <Card key={index} value={value} icon='experience' />
              }
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Resume
