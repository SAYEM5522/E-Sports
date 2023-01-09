import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user:null,
   openSignup:false
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser:(state,action)=>{
      state.user=action.payload.user
    },
    setopenSignup:(state,action)=>{
    state.openSignup=action.payload.openSignup
    }
  }
});

export const {
  setUser,
  setopenSignup
} = userSlice.actions

export default userSlice.reducer
export const selectUser=(state:any)=>state.user.user
export const selectOpenSignup=(state:any)=>state.user.openSignup
