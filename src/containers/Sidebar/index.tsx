import { useDispatch } from 'react-redux'
import * as SB from './sidebar.style'
import FilterCard from '../../components/FilterCard'

const SideBar = () => {
  const dsp = useDispatch()

  return (
    <SB.Aside>
      <SB.Querier type='text' placeholder='Buscar'/>
      {/* Área dos filtros */}
      <SB.FilterContainer>
        <FilterCard type='category' criterion='família' />
        <FilterCard type='category' criterion='trabalho' />
        <FilterCard type='category' criterion='comum' />
        <FilterCard type='fav' criterion='favorito' />
        <FilterCard type='all' criterion='todos' />
      </SB.FilterContainer>
    </SB.Aside>
  )
}

export default SideBar
