import About from './components/About/About'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Pricing from './components/Pricing/Pricing'
import Resume from './components/Resume/Resume'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Services from './components/Services/Services'
import Sidebar from './components/Sidebar/Sidebar'
import Testimonials from './components/Testimonials/Testimonials'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'

function App() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <main className='page'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Pricing />
        <Portfolio />
        <Testimonials />
      </main>
      <ThemeSwitcher />
      <ScrollUp />
    </div>
  )
}

export default App
