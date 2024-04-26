import { configureStore } from '@reduxjs/toolkit'

import contactReducer from './contacts'

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
