import { createSlice } from '@reduxjs/toolkit'

export const passSlice = createSlice({
  name: 'counter',
  initialState:{value:false},
  reducers: {
    setPass:(state)=>{
      state.value=!state.value
    }
  },
})

export const {setPass} = passSlice.actions

export default passSlice.reducer