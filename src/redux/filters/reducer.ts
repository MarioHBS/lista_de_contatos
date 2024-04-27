import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CategoryType } from '../../utils/enums'

type FilterState = {
  query?: string
  criteria: 'category' | 'fav' | 'all'
  value?: CategoryType
  fav?: boolean
}

const initialState: FilterState = {
  query: '',
  criteria: 'all',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setCriterion: (state, action: PayloadAction<FilterState>) => {
      state.criteria = action.payload.criteria
      state.value = action.payload.value
    },
  },
})

export const { setCriterion, setQuery } = filterSlice.actions
export default filterSlice.reducer
