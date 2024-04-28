import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import ContactModel from '../../models/Contact'
import { CategoryType } from '../../utils/types'

type InitType = {
  list: ContactModel[]
}

const initialState: InitType = {
  list: [
    {
      id: 1,
      name: 'Adriana Marão',
      email: 'adriana@gmail.com',
      phone: '21912345678',
      category: CategoryType.COMMON,
      fav: false,
    },
    {
      id: 2,
      name: 'Fabrício da Nóbrega',
      email: 'fab_nobre@outlook.com.br',
      phone: '9911111111',
      category: CategoryType.FAMILY,
      fav: true,
    },
    {
      id: 3,
      name: 'Mário Henrique',
      email: 'marioh90@gmail.com',
      phone: '98985349760',
      category: CategoryType.WORK,
      fav: false,
    },
    {
      id: 4,
      name: 'Roberto de Sousa',
      email: 'rober.to@email.com',
      phone: '9973914682',
      category: CategoryType.FAMILY,
      fav: false,
    },
    {
      id: 5,
      name: 'Xirlene Maria Cavalcante',
      email: 'xirlene_maca@yahoo.com.br',
      phone: '11988667799',
      category: CategoryType.COMMON,
      fav: true,
    },
  ],
}

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((c) => c.id !== action.payload)
    },
    edit: (state, action: PayloadAction<ContactModel>) => {
      const index = state.list.findIndex((c) => c.id === action.payload.id)

      if (index > -1) {
        state.list[index] = action.payload
      }
    },
    add: (state, action: PayloadAction<Omit<ContactModel, 'id'>>) => {
      const exists = state.list.find(
        (c) => c.name.toLowerCase() === action.payload.name.toLowerCase(),
      )

      if (exists) {
        alert('Contato com mesmo nome já existente!')
      } else {
        const lastItem = state.list[state.list.length - 1]
        const newContact = {
          ...action.payload,
          id: lastItem ? lastItem.id + 1 : 1,
        }
        state.list = [...state.list, newContact]
        state.list = state.list.sort((a, b) => a.name.localeCompare(b.name))
      }
    },
    // setFavorite: (state, action) => {}
  },
})

export const { add, edit, remove } = ContactSlice.actions
export default ContactSlice.reducer
