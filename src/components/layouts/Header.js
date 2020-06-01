import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/theme/ThemeContext'
import { Container } from '../../components/styledComponents/layout'
import { ChevronDown, Moon, Sun } from '@styled-icons/fa-solid'
import { Link } from 'react-router-dom'
import Babi from '../../assets/images/babi-mascara-covid.png'

const Header = () => {
  const themeProvider = useContext(ThemeContext)
  const { themeType, toggleTheme } = themeProvider

  return (
    <StyledHeader>
      <StyledDiv flexStart>
        <Link to='/'>
          <svg xmlns='http://www.w3.org/2000/svg' style={{ width: '80px', height: '28px' }} viewBox='0 0 109.00000762939453 41'><path d='M6.674 13.268H.534A.533.533 0 000 13.8v25.567c0 .294.24.532.535.532h6.139a.533.533 0 00.535-.532V13.8a.533.533 0 00-.535-.532zM13.855 39.89h6.137a.536.536 0 00.534-.532V20.143a.53.53 0 01.465-.53 27.997 27.997 0 013.763-.177c2.234 0 3.746.577 4.56 1.753.482.694.72 1.596.72 2.713v15.465a.533.533 0 00.538.532h6.094a.536.536 0 00.535-.532v-14.94a14.35 14.35 0 00-.795-4.903c-1.58-4.387-5.5-6.887-11.115-6.887-4.196 0-8.723.503-11.465 1.264a.532.532 0 00-.384.509l-.113 24.955a.53.53 0 00.526.525zM92.459 39.367a.533.533 0 00.537.532h6.136a.536.536 0 00.535-.532V20.143a.527.527 0 01.452-.527c.986-.13 1.98-.185 2.974-.168a11.961 11.961 0 013.431.424.534.534 0 00.647-.35l1.806-5.574a.527.527 0 00-.196-.584.533.533 0 00-.199-.09 26.02 26.02 0 00-6.019-.614c-2.749 0-6.77.365-9.743 1.292a.535.535 0 00-.37.512l.009 24.903zM85.306 33.075a.53.53 0 00-.645-.35 34.163 34.163 0 01-8.192 1.006c-3.826 0-6.394-1.82-6.394-7.147 0-2.487.404-4.145 1.146-5.24.871-1.288 2.212-1.795 3.925-1.908 2.846-.192 5.026.898 4.965 2.64l-2.758 1.409-4.441 2.268a.536.536 0 00-.286.521.53.53 0 00.06.2l2.604 4.936a.537.537 0 00.709.225l9.174-4.43 2.158-1.041a.548.548 0 00.305-.492c-.11-8.69-4.424-13.035-12.492-13.035-5.785 0-9.628 2.372-11.386 6.916-.727 1.874-1.106 4.109-1.106 6.716v.631c0 9.045 4.647 13.632 13.814 13.632 3.686 0 7.39-.496 10.267-1.322a.535.535 0 00.354-.673l-1.78-5.462zM58.212 32.364c-1.406.673-3.326 1.732-5.807 1.42-2.144-.271-3.254-1.17-3.254-3.462v-9.716a.533.533 0 01.535-.534h7.922a.538.538 0 00.494-.329.53.53 0 00.04-.203v-5.731a.532.532 0 00-.535-.534h-7.921a.538.538 0 01-.496-.332.53.53 0 01-.04-.205V3.06a.529.529 0 00-.258-.457.537.537 0 00-.527-.014l-6.134 3.193a.534.534 0 00-.289.471v24.01c0 6.681 3.64 10.478 10.427 10.478 2.78 0 5.1-.597 8.72-2.383l1.014-.51a.533.533 0 00.244-.702l-2.383-5.047a.534.534 0 00-.522-.304.538.538 0 00-.205.055l-1.025.514z' /><path fill='#7F7F7F' d='M4.677 3.004c.427.233.779.582 1.015 1.005.251.459.378.975.368 1.497.01.523-.117 1.04-.368 1.501-.233.43-.586.783-1.015 1.019a2.99 2.99 0 01-1.47.357 2.722 2.722 0 01-1.056-.2 2.03 2.03 0 01-.806-.606v.72H.088V.536h1.316v2.856c.22-.241.492-.43.795-.554.32-.132.662-.2 1.008-.198a3.013 3.013 0 011.47.364zm-.422 3.768a1.747 1.747 0 00.47-1.266 1.739 1.739 0 00-.47-1.268 1.594 1.594 0 00-1.194-.476c-.3-.001-.594.076-.853.225a1.532 1.532 0 00-.598.61 1.85 1.85 0 00-.226.922c-.006.321.071.638.226.92.137.256.344.469.598.613.26.144.555.217.853.213a1.588 1.588 0 001.194-.493zM19.497 3.266c.428.412.641 1.022.641 1.832v3.2H18.82V5.263a1.565 1.565 0 00-.347-1.104 1.282 1.282 0 00-.989-.37 1.534 1.534 0 00-1.146.432c-.3.346-.452.796-.422 1.253v2.822h-1.312V2.712h1.25v.72c.222-.26.504-.46.822-.585.355-.14.734-.21 1.115-.207a2.36 2.36 0 011.706.626zM22.957 8.006a2.701 2.701 0 01-1.083-1.021 2.831 2.831 0 01-.388-1.479c-.01-.518.125-1.03.388-1.477a2.74 2.74 0 011.079-1.014 3.299 3.299 0 011.58-.366 3.032 3.032 0 011.457.335c.409.214.738.55.942.962l-1.01.586a1.623 1.623 0 00-.604-.581 1.778 1.778 0 00-2.016.283 1.709 1.709 0 00-.485 1.272 1.71 1.71 0 00.479 1.27 1.783 1.783 0 002.03.283c.25-.138.459-.338.606-.581l1.009.585a2.264 2.264 0 01-.969.963 2.98 2.98 0 01-1.446.339 3.313 3.313 0 01-1.569-.36zM29.05 8.006a2.665 2.665 0 01-1.067-1.021c-.26-.45-.394-.96-.386-1.479a2.832 2.832 0 01.386-1.477c.255-.43.624-.78 1.068-1.014a3.428 3.428 0 013.083 0A2.7 2.7 0 0133.2 4.03c.261.449.394.96.384 1.477a2.85 2.85 0 01-.384 1.479c-.251.433-.62.787-1.065 1.02a3.428 3.428 0 01-3.083 0h-.002zm2.736-1.234a1.73 1.73 0 00.474-1.266 1.721 1.721 0 00-.474-1.268 1.732 1.732 0 00-2.394 0 1.747 1.747 0 00-.468 1.268 1.737 1.737 0 00.468 1.266 1.732 1.732 0 002.394 0zM9.966 2.64c.345-.004.686.06 1.005.189.303.123.574.313.794.554V2.71h1.316v5.587h-1.257v-.72a2.046 2.046 0 01-.806.597 2.765 2.765 0 01-1.056.198 3.02 3.02 0 01-1.465-.346 2.559 2.559 0 01-1.013-1.01 3.011 3.011 0 01-.37-1.501 2.975 2.975 0 01.37-1.497 2.561 2.561 0 011.013-1.005 3.02 3.02 0 011.47-.373zm.147 4.603c.298.004.593-.07.853-.213.253-.145.46-.357.598-.613.154-.282.232-.6.226-.92a1.854 1.854 0 00-.226-.922 1.533 1.533 0 00-.598-.61 1.696 1.696 0 00-.853-.225 1.606 1.606 0 00-1.194.48 1.747 1.747 0 00-.47 1.268 1.739 1.739 0 00.47 1.266 1.58 1.58 0 001.194.498v-.01z' /></svg>
        </Link>
        <p>Saldo em Conta: R$ 999</p>
      </StyledDiv>

      <StyledDiv flexEnd>
        <AccountSettingsShortcut>
          <img src='https://avatars0.githubusercontent.com/u/41683571?v=4' alt='Thiago Nunes Batista' />
          <ChevronDown size='0.5rem' />
        </AccountSettingsShortcut>
        <figure>
          <ChatBotImage src={Babi} alt='Tire as Suas Dúvidas Com o Chat Bot.' />
        </figure>

        <ToggleThemeButton onClick={() => toggleTheme()}>
          <Sun size='1rem' title='Mudar Tema' style={{ color: themeType === 'dark' ? 'var(--primary-color)' : '' }} />
          <Moon size='1rem' title='Mudar Tema' style={{ color: themeType !== 'dark' ? 'var(--primary-color)' : '' }} />
        </ToggleThemeButton>
      </StyledDiv>
    </StyledHeader>
  )
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${props => props.flexStart ? 'flex-start' : (props.flexEnd ? 'flex-end' : 'space-between')};

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0px;
    justify-content: space-between;
  }

  & > a, & > p {
    margin: 0px 0.5rem;
  }

  & > a path {
    fill: ${props => props.theme.primary};
  }

  & > a path:hover {
    fill: ${props => props.theme.orangeHover};
  }
`

const StyledHeader = styled(Container).attrs({ as: 'header' })`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  fill: ${props => props.theme.color};
  font-weight: bold;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const AccountSettingsShortcut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0.5rem;
  color: ${props => props.theme.color};

  &:hover {
    cursor: pointer;
  }

  img {
    display: inline-block;
    border-radius: 1rem;
    width: 30px;
    margin: 0px 0.25rem;
  }
`

const ToggleThemeButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  border: 0.25rem solid ${props => props.theme.color};
  color: ${props => props.theme.color};

  width: 4rem;
  height: 2rem;
  margin: 0px 0.5rem;
  position: relative;
  background: ${props => props.theme.background};

  outline: none;
  cursor: pointer;
`

const ChatBotImage = styled.img`
  width: 30px;
  margin: 0px 0.5rem;

  &:hover {
    cursor: pointer;
  }
`

export default Header
