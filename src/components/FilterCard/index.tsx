import StyledCard from './filter.style'

type FilterProps = {
  type: 'category' | 'fav' | 'all'
  criterion: string
}

const FilterCard = ({ type }: FilterProps) => {
  return (
    <>
      <StyledCard active>
        <h2>{type}</h2>
      </StyledCard>
    </>
  )
}

export default FilterCard
