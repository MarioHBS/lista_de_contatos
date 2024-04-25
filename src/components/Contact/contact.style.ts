import styled, { DefaultTheme } from 'styled-components'

type CardProp = {
  edit_status: boolean
  theme: DefaultTheme
}

function hasBorder({ edit_status: editStatus, theme }: CardProp) {
  if (editStatus) return `2px solid ${theme.backgroundEditing}`
  else return 'none'
}

export const Card = styled.div<CardProp>`
  background-color: ${({ theme }) => theme.backgroundElement};
  box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border: ${(param) => hasBorder(param)};
  border-radius: 16px;

  h3 {
    font-weight: bold;
  }

  h4:nth-child(2) {
    margin-top: 4px;
  }

  @media (max-width: 824px) {
    // display: block;
    text-align: center;
  }
`

export const Field = styled.h3``
export const Entry = styled.input`
  font-size: 18px;
  border: none;
  outline: none;
  border-bottom: 1px solid #bbb;
  text-transform: capitalize;
`

export const Entry2 = styled(Entry)`
  font-size: 14px;
`

export const ActionArea = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px;

  button:nth-child(1) {
    margin-right: 8px;
  }
`
