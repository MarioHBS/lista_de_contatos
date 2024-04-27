import styled from 'styled-components'

type CardProp = {
  active: boolean
}

const StyledCard = styled.div<CardProp>`
  display: inline-block;
  text-align: center;
  padding: 16px 8px;
  color: ${({ active: selected, theme }) =>
    selected ? theme.activeCard : theme.unactiveText};
  border: 0.7px solid
    ${({ active: selected, theme }) =>
      selected ? theme.activeCard : theme.unactiveCard};
  border-radius: 16px;
  font-size: 12px;
  cursor: pointer;

  span {
    display: block;
    font-weight: bold;
    font-size: 24px;
  }

  span:nth-child(2) {
    font-size: 14px;
  }
`

export default StyledCard
