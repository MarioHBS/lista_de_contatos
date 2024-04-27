import StyledCard from './filter.style'

type FilterProps = {
  type: 'category' | 'fav' | 'all'
  criterion: string
}

const FilterCard = ({ criterion, type }: FilterProps) => {
  return (
    <>
      <StyledCard active={false}>
        <span>0</span>
        <span>{criterion}</span>
      </StyledCard>
    </>
  )
}

export default FilterCard
