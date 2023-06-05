// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const CreditCardContainer = styled.div`
  background-color: #344e7a;
  display: flex;
  width: 50vw;
  flex-direction: column;
  justify-content:center;
  align-items:center
  padding: 10px;
`
export const Form = styled.form`
  display: flex;
  width: 90%;
  box-shadow: 0px 0px 3px 3px #475569;
  padding: 30px;
  flex-direction: column;
`
export const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`

export const CreditCardImg = styled.div`
  display: flex;
  height: 40vh;
  background-size: cover;
  width: 40vw;
  flex-direction: row;
  align-items: center;
  margin: 30px;
  padding: 30px;
  border-radius: 10px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
`
export const Heading = styled.h1`
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  font-weight: bold;
  align-self: center;
  color: #ffffff;
  border-bottom: 2px solid #ffd773;
  font-family: 'Roboto';
`

export const CardNumber1 = styled.p`
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  font-family: 'Roboto';
  color: #ffffff;
`
export const Name = styled.p`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  font-family: 'Roboto';
  color: #ffffff;
`

export const Desc = styled.p`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  font-family: 'Roboto';
  color: #ffffff;
`
export const Head = styled.h1`
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  font-weight: bold;
  color: #3b4b69;
  font-family: 'Roboto';
`
export const InputEl = styled.input`
  height: 40px;
  border-radius: 5px;
  width: 90%;
  margin: 20px;
  border: 1px solid #475569;
  background-color: #ffffff;
`
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
`
