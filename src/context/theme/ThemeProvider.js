import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
import { darkTheme, lightTheme } from './colorSets'

const ThemeProvider = props => {
  const [theme, setTheme] = useState(darkTheme)
  const [themeType, setThemeType] = useState('dark')

  const toggleTheme = () => {
    if (themeType === 'dark') {
      setTheme(lightTheme)
      setThemeType('light')
    } else {
      setTheme(darkTheme)
      setThemeType('dark')
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeType,
        toggleTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
