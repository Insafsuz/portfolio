import { useState, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import './ThemeSwitcher.scss'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className='theme' onClick={toggleTheme}>
      {theme === 'dark' ? <FiMoon color='#fff' /> : <FiSun color='#000' />}
    </div>
  )
}

export default ThemeSwitcher
