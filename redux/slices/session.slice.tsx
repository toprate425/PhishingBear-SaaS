import store from 'store'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: {},
  isLoggedIn: store.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY}`) ? true : false
}

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    setToken: (state: any, action: any) => {
      console.log('action', action?.payload);
      store.set(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || 'bIESIcj42We9', action?.payload)
      state.isLoggedIn = action?.payload ? true : false
    },
    setLogOut: () => {
      store.clearAll()
    }
  },
})

export const { setToken, setLogOut } = sessionSlice.actions;

export default sessionSlice.reducer
