import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // column-gap: 8px;
  gap: 8px 16px;
  padding: 5px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 824px) {
    grid-template-columns: 1fr;
  }
`
