import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem 2rem;

  @media (max-width: 768px){
    padding: 10px;
  }
`

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 1rem;
  border: none;
  color: #FB6910;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.orangeColor};
  }
`

export const Paragraph = styled.p`
  margin: 0.5rem;
`
export const StickTop = styled.div`
  position: sticky;
  top: 0;
`
