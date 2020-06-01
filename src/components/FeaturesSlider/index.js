import React from 'react'
import { Container, Heading } from '../styledComponents/layout'
import Card from '../layouts/Card'
import styled from 'styled-components'

// Bootstrap icons
import { BsArrowLeftRight } from 'react-icons/bs'

// Font Awesome Icons
import { FaHandHoldingUsd, FaMoneyCheckAlt, FaRegMoneyBillAlt } from 'react-icons/fa'

// Ionicons
import { IoIosBarcode, IoMdBriefcase, IoIosCalculator, IoIosCalendar, IoMdGift, IoMdHome, IoIosKey, IoMdCard, IoIosPaper, IoMdPerson, IoMdQrScanner, IoIosUmbrella } from 'react-icons/io'

// Material Design Icons
import { MdSmartphone } from 'react-icons/md'

// Remix Icons
import { RiMoneyEuroBoxLine } from 'react-icons/ri'

const FeaturesSlider = () => {
  const items = [
    {
      title: 'Transferências',
      Icon: BsArrowLeftRight
    },
    {
      title: 'Pagamentos',
      Icon: IoIosBarcode
    },
    {
      title: 'Investimentos',
      Icon: IoIosCalculator
    },
    {
      title: 'Cartões',
      Icon: IoMdCard
    },
    {
      title: 'Gift Card',
      Icon: IoMdGift
    },
    {
      title: 'Seguros',
      Icon: IoIosUmbrella
    },
    {
      title: 'Interpag',
      Icon: IoMdQrScanner
    },
    {
      title: 'Depósito por boleto',
      Icon: IoIosPaper
    },
    {
      title: 'Depósito por cheque',
      Icon: FaMoneyCheckAlt
    },
    {
      title: 'Conta MEI',
      Icon: IoMdPerson
    },
    {
      title: 'Agendamentos',
      Icon: IoIosCalendar
    },
    {
      title: 'Portabilidade de salário',
      Icon: IoMdBriefcase
    },
    {
      title: 'Empréstimo',
      Icon: FaHandHoldingUsd
    },
    {
      title: 'Financiamento Imobiliário',
      Icon: IoMdHome
    },
    {
      title: 'Débito automático',
      Icon: FaRegMoneyBillAlt
    },
    {
      title: 'Consórcio',
      Icon: IoIosKey
    },
    {
      title: 'Câmbio',
      Icon: RiMoneyEuroBoxLine
    },
    {
      title: 'Recarga',
      Icon: MdSmartphone
    }
  ]

  return (
    <>
      <FeaturesHeading>Seja Bem Vindo ao Internet Banking</FeaturesHeading>
      <FeaturesContainer>
        {items.map(({ Icon, title }, index) => (
          <Card key={index} title={title}>
            <Icon />
          </Card>
        ))}
      </FeaturesContainer>
    </>
  )
}

const FeaturesContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const FeaturesHeading = styled(Heading).attrs({ as: 'h2' })``

export default FeaturesSlider
