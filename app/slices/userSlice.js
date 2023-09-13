import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loggedin:false,
    username:"navneet",
    email:"navneet@gmail.com",
    password:"12345678"
  },
  reducers: {
    togglelog:state=>{
        state.loggedin=!state.loggedin
    },
    userdef:(state,action)=>{
        state.username=action.payload.username
        state.email=action.payload.email,
        state.password=action.payload.password
    }

     
  }
})

export const selectUser = (state) => state.users;

export const { togglelog,userdef } = usersSlice.actions

export default usersSlice.reducer



