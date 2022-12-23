import { createSlice } from '@reduxjs/toolkit'

export const signSlice = createSlice({
  name: 'counter',
  initialState:{value:false},
  reducers: {
    sign: (state) => {
      state.value = !state.value
    },
  },
})

export const {sign} = signSlice.actions

export default signSlice.reducer