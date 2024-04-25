import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
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

export const MainContainer = styled.main``
