import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import ContactModel from '../../models/Contact'

type InitType = {
  list: ContactModel[]
}

const initialState: InitType = {
  list: [
    {
      id: 1,
      name: 'Mário Henrique',
      email: 'marioh90@gmail.com',
      phone: '(98) 985349760',
    },
    {
      id: 2,
      name: 'Adriana Marão',
      email: 'adriana@gmail.com',
      phone: '(21) 912345678',
    },
    {
      id: 3,
      name: 'Roberto de Sousa',
      email: 'rober.to@email.com',
      phone: '(99) 73914682',
    },
    {
      id: 4,
      name: 'Xirlene Maria Cavalcante',
      email: 'xirlene_maca@yahoo.com.br',
      phone: '(11) 988667799',
    },
    {
      id: 5,
      name: 'Fabrabrício da Nóbrega',
      email: 'fab_nobre@outlook.com.br',
      phone: '(99) 11111111',
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
      }
    },
    // setFavorite: (state, action) => {}
  },
})

export const { add, edit, remove } = ContactSlice.actions
export default ContactSlice.reducer
