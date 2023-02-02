import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  menu: null,
  isLoggedin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        storeDetails : (state, action) => {
            state.email = action.payload.email
        },
        storeMenu : (state, action) => {
            state.menu = action.payload
        },
        userLogin : (state) => {
            state.isLoggedin = true
        },
        userLogout : (state) => {
            state.isLoggedin = false
        },
    },
})

export const {storeDetails, storeMenu, userLogin, userLogout} = userSlice.actions;

export default userSlice.reducer;