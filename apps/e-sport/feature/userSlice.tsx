import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user:null,
   openSignup:false,
   selectedTeam:null,
   teamInfo:null,
   layoutBanner:null,
   TournamentModel:false
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
    },
    setSelectedTeam:(state,action)=>{
      state.selectedTeam=action.payload.selectedTeam
    },
    setTeamInfo:(state,action)=>{
      state.teamInfo=action.payload.teamInfo
    },
    setLayoutBanner:(state,action)=>{
      state.layoutBanner=action.payload.layoutBanner
    },
    setTournamentModel:(state,action)=>{
      state.TournamentModel=action.payload.TournamentModel
    },
  }
});

export const {
  setUser,
  setopenSignup,
  setSelectedTeam,
  setTeamInfo,
  setLayoutBanner,
  setTournamentModel
} = userSlice.actions

export default userSlice.reducer
export const selectUser=(state:any)=>state.user.user
export const selectOpenSignup=(state:any)=>state.user.openSignup
export const selectSelectedTeam=(state:any)=>state.user.selectedTeam
export const selectTeamInfo=(state:any)=>state.user.teamInfo
export const selectLayoutBanner=(state:any)=>state.user.layoutBanner
export const selectTournamentModel=(state:any)=>state.user.TournamentModel




