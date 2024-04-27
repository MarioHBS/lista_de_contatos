import { useState } from 'react'
import { useSelector } from 'react-redux'

import { ContactComponent, FavComponent } from '../../components/Contact'
import { RootReducer } from '../../redux/store'
import { MainContainer } from '../../styles/global'
import Inner from './list.style'

const ListContacts = () => {
  const [favMode] = useState(false)
  const { list: listaContatos } = useSelector((root: RootReducer) => root.contact)

  const filtering = () => {
    let filtered = listaContatos

    return filtered
  }

  return (
    <MainContainer>
      <h2>Título com algum retorno</h2>

      {favMode ? (
        <Inner.Grid>
          {filtering().map((item) =>
            <FavComponent key={item.name}>{item}</FavComponent>
          )}
        </Inner.Grid>
      ) : (
        <Inner.Stack>
          {filtering().map((item) =>
            <ContactComponent key={item.name}>{item}</ContactComponent>
          )}
        </Inner.Stack>
      )}
    </MainContainer>
  )
}
export default ListContacts
