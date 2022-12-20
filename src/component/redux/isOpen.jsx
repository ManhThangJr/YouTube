import { createSlice } from '@reduxjs/toolkit'

export const openSlice = createSlice({
  name: 'counter',
  initialState:{value:true},
  reducers: {
    isOpen: (state) => {
      state.value = !state.value
    },
    open:(state,action)=>{
      state.value=action.payload
    }
  },
})

export const {isOpen,open} = openSlice.actions

export default openSlice.reducer