import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user:""
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    
  }
});

export const {} = userSlice.actions

export default userSlice.reducer