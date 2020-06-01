import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ThemeContext from '../../context/theme/ThemeContext'
import { Container } from '../styledComponents/layout'

const Footer = () => {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext
  return (
    <ThemeProvider theme={theme}>
      <StyledFooter>
        <Container>
          <h4>Fale Conosco</h4>
          <p>Ligue 3003 4070 (Regiões Metropolitanas) ou 0800 940 0007 (Demais Regiões) | Horário de Atendimento: 08:00 às 20:00.</p>
        </Container>

        <Container>
          <h4>Para reclamações, sugestões ou cancelamentos de produtos e serviços:</h4>

          <ul>
            <li>Central de Relacionamento: 3003 4070 / 0800 940 0007</li>
            <li>Deficiente de fala e Audição: 0800 979 7099</li>
          </ul>
        </Container>
      </StyledFooter>
    </ThemeProvider>
  )
}

const StyledFooter = styled.footer`
  color: ${props => props.theme.color};
  background: ${props => props.theme.background}
`

export default Footer
