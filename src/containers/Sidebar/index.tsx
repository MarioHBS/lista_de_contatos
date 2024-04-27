import { useDispatch } from 'react-redux'
import * as SB from './sidebar.style'

const SideBar = () => {
  const dsp = useDispatch()

  return (
    <SB.Aside>
      <SB.Campo type='text' placeholder='Buscar'/>
    </SB.Aside>
  )
}

export default SideBar
