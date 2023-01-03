import { createSlice } from '@reduxjs/toolkit'

// value interface
export interface ModelState {
    isOpen: boolean
}

// initial state value
const initialState: ModelState = {
    isOpen: false,
}

export const NavModelSlice = createSlice({
  name: 'navModel',
  initialState,
  reducers: {
    handleOpen: (state) => {
         // prevent scroll when model is open
        document.body.style.overflow = 'hidden'

        state.isOpen = true
    },
    handleClose: (state) => {
         // allow scroll when model is close
        document.body.style.overflow = 'auto'

        state.isOpen = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { handleOpen, handleClose } = NavModelSlice.actions

export default NavModelSlice.reducer