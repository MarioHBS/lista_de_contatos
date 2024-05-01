import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 100vh;
  padding: 8px;
`

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  padding-top: 16px;

  div:nth-child(5) {
    grid-column: 1 / span 2;
  }
`
