import React from 'react'
import styled from 'styled-components'

const Card = props => {
  return (
    <StyledCard>
      {props.children}
      <p>{props.title}</p>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  display: flex;
  width: 130px;
  height: 130px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.color};
  padding: 0.25rem;
  margin: 0.5rem;
  border-radius: 1rem;
  font-weight: bold;

  svg {
    font-size: 1.5rem;
    margin: 0.5rem 0px;
  }

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.orangeHover};
  }
`

export default Card
