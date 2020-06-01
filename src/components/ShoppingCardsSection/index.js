import React from 'react'
import { Container, Heading } from '../styledComponents/layout'
import Card from '../layouts/Card'
import styled from 'styled-components'

// Font Awesome Icons
import { FaTicketAlt } from 'react-icons/fa'

// Game Icons
import { GiHealthNormal, GiLipstick } from 'react-icons/gi'

// Ionicons
import { IoIosAirplane, IoIosBasketball, IoIosCar, IoMdHome, IoMdShirt } from 'react-icons/io'

// Material Design Icons
import { MdSmartphone } from 'react-icons/md'

const ShoppingCardsSection = () => {
  const items = [
    {
      title: 'Casa',
      Icon: IoMdHome
    },
    {
      title: 'Entretenimento',
      Icon: FaTicketAlt
    },
    {
      title: 'Tecnologia',
      Icon: MdSmartphone
    },
    {
      title: 'Transporte',
      Icon: IoIosCar
    },
    {
      title: 'Esporte',
      Icon: IoIosBasketball
    },
    {
      title: 'Viagem',
      Icon: IoIosAirplane
    },
    {
      title: 'Saúde',
      Icon: GiHealthNormal
    },
    {
      title: 'Beleza',
      Icon: GiLipstick
    },
    {
      title: 'Moda',
      Icon: IoMdShirt
    }
  ]
  return (
    <>
      <ShoppingHeading>Faça Suas Compras e Ganhe Cashback</ShoppingHeading>
      <ShoppingContainer>
        {items.map(({ title, Icon }, index) => (
          <Card key={index} title={title}>
            <Icon />
          </Card>
        ))}
      </ShoppingContainer>
    </>
  )
}

const ShoppingContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const ShoppingHeading = styled(Heading).attrs({ as: 'h2' })``

export default ShoppingCardsSection
