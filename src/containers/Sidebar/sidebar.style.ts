import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 100vh;
  padding: 8px;
`

export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  padding-top: 16px;
`
