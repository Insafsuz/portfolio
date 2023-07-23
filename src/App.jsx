import Home from './components/Home/Home'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Sidebar from './components/Sidebar/Sidebar'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'

function App() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <main className='page'>
        <Home />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
      <ThemeSwitcher />
      <ScrollUp />
    </div>
  )
}

export default App
