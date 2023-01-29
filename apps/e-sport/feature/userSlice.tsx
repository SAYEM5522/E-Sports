import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user:null,
   openSignup:false,
   selectedTeam:null,
   teamInfo:null,
   layoutBanner:null,
   TournamentModel:false,
   TournamentModeCheck:false,
   MemberListmodel:false,
   MemberModelCheck:false,
   ReamingTimeIndicator:false


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
    setTournamentModeCheck:(state,action)=>{
      state.TournamentModeCheck=action.payload.TournamentModeCheck
    },
    setMemberListmodel:(state,action)=>{
      state.MemberListmodel=action.payload.MemberListmodel
    },
    setMemberModelCheck:(state,action)=>{
      state.MemberModelCheck=action.payload.MemberModelCheck
    },
    setReamingTimeIndicator:(state,action)=>{
      state.ReamingTimeIndicator=action.payload.ReamingTimeIndicator
    },
  }
});

export const {
  setUser,
  setopenSignup,
  setSelectedTeam,
  setTeamInfo,
  setLayoutBanner,
  setTournamentModel,
  setTournamentModeCheck,
  setMemberListmodel,
  setMemberModelCheck,
  setReamingTimeIndicator
} = userSlice.actions

export default userSlice.reducer
export const selectUser=(state:any)=>state.user.user
export const selectOpenSignup=(state:any)=>state.user.openSignup
export const selectSelectedTeam=(state:any)=>state.user.selectedTeam
export const selectTeamInfo=(state:any)=>state.user.teamInfo
export const selectLayoutBanner=(state:any)=>state.user.layoutBanner
export const selectTournamentModel=(state:any)=>state.user.TournamentModel
export const selectTournamentModeCheck=(state:any)=>state.user.TournamentModeCheck
export const selectMemberListmodel=(state:any)=>state.user.MemberListmodel
export const selectMemberModelCheck=(state:any)=>state.user.MemberModelCheck
export const selectReamingTimeIndicator=(state:any)=>state.user.ReamingTimeIndicator








