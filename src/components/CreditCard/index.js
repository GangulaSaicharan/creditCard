// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  Form,
  FormCont,
  CreditCardImg,
  Heading,
  CardNumber1,
  Name,
  Desc,
  Head,
  InputEl,
  Cont,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <CreditCardImg data-testid="creditCard">
          <Cont>
            <CardNumber1>{number}</CardNumber1>
            <Desc>CARDHOLDER NAME</Desc>
            <Name>{name}</Name>
          </Cont>
        </CreditCardImg>
      </CreditCardContainer>
      <FormCont>
        <Form>
          <Head>Payment Method</Head>
          <InputEl
            value={number}
            type="text"
            onChange={onChangeNumber}
            placeholder="Card Number"
          />
          <InputEl
            value={name}
            type="text"
            onChange={onChangeName}
            placeholder="Cardholder Name"
          />
        </Form>
      </FormCont>
    </MainContainer>
  )
}
export default CreditCard
