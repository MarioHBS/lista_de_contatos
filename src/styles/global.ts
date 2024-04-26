import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-weight: normal; // tive que colocar isso ??
    list-style: none;
  }
`

export const OuterContainer = styled.div`
  max-width: 1024px;
`

export const GlobalContainer = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
`

export const MainContainer = styled.main`
  padding: 0 50px;
  height: 90vh;
  overflow-y: scroll;
`

export const Entry = styled.input`
  font-size: 18px;
  border: none;
  outline: none;
  border-bottom: 1px solid #bbb;
  text-transform: capitalize;
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  background-color: ${({ theme }) => theme.btnNormal};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  // margin-right: 8px;
`

export const ButtonSave = styled(Button)`
  background-color: ${({ theme }) => theme.lightGreen};
  &:hover {
    background-color: ${({ theme }) => theme.greenHover};
  }
`
