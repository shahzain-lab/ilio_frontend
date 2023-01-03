import { configureStore } from '@reduxjs/toolkit'
import NavModelSlice from '../features/NavModelSlice'

export const store = configureStore({
  reducer: {
    navModel: NavModelSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch