import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ThemeContext from '../../context/theme/ThemeContext'

import { Container, StickTop } from '../styledComponents/layout'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import FeaturesSlider from '../FeaturesSlider'
import ShoppingCardsSection from '../ShoppingCardsSection'
import Navbar from '../layouts/Navbar'

const Home = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <StickTop>
        <Header />
        <Navbar />
      </StickTop>
      <HomeContainer>
        <FeaturesSlider />
        <ShoppingCardsSection />
      </HomeContainer>
      <Footer />
    </ThemeProvider>
  )
}

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background};
`

export default Home
