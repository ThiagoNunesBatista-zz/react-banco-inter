import React from 'react'
import Routes from './routes'
import ThemeProvider from './context/theme/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default App
