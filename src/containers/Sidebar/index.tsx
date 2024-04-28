// import { useDispatch } from 'react-redux'
import * as SB from './sidebar.style'
import FilterCard from '../../components/FilterCard'
import { CategoryType } from '../../utils/types'

const SideBar = () => {
  // const dsp = useDispatch()

  return (
    <SB.Aside>
      <SB.Querier type='text' placeholder='Buscar'/>
      {/* Área dos filtros */}
      <SB.FilterContainer>
        <FilterCard type='category' criterion='família' value={CategoryType.FAMILY} />
        <FilterCard type='category' criterion='trabalho' value={CategoryType.WORK} />
        <FilterCard type='category' criterion='comum' value={CategoryType.COMMON} />
        <FilterCard type='fav' criterion='favorito' />
        <FilterCard type='all' criterion='todos' />
      </SB.FilterContainer>
    </SB.Aside>
  )
}

export default SideBar
