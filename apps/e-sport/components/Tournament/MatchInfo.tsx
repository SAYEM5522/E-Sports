
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

const generateMatchSchedule = (teams:any) => {
  const schedule = [];
  const n = teams.length;
  let shuffledTeams = [...teams];
  // Fisher-Yates shuffle algorithm
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledTeams[i], shuffledTeams[j]] = [shuffledTeams[j], shuffledTeams[i]];
  }
  for (let i = 0; i < n / 2; i++) {
    const nextMatchId = (Math.floor(i / 2) + 1)*100;
    // schedule.push([shuffledTeams[i], shuffledTeams[n - i - 1]]);
    schedule.push([shuffledTeams[i], shuffledTeams[n - i - 1], { nextMatchId }]);
  }
  return schedule;
};

const Schedule = () => {
    const [teamList,setTeamList]=useState([])
    const [BracketList,setBracketList]=useState([])

    const getTeamlist=async()=>{
    const eventid=Cookies.get("_m_t_id_")
    await axios.get(`http://localhost:8081/getManyVManyRoute/${eventid}`).then((res)=>{
      setTeamList(res.data)
   }).catch((err)=>{
      console.log(err)
   })
  }
  const postBracket=async()=>{

   axios.get(`http://localhost:8081/getBracket/${Cookies.get("_t_id")}`).then((res)=>{
    setBracketList(res.data)
   }).catch((err)=>{
    console.log(err)
   })
    if(BracketList.length===0){
      {matches.map((match:any, index:number) =>{
        const data={
          EventId:Cookies.get("_t_id"),
          id:index+1,
          nextMatchId:match[2].nextMatchId,
          tournamentRoundText: "1",
          startTime: "",
          state: "SCHEDULED",
          participants: [
            {
              pid:match[0].Admin,
              resultText: null,
              isWinner: false,
              status: null,
              name:match[0].MainTeam,
            },
            {
              pid:match[1].Admin,
              resultText: null,
              isWinner: false,
              status: null,
              name:match[1].MainTeam,
            }
          ]
        }
        axios.post("http://localhost:8081/CreateBracket",data).then((res)=>{
         console.log(res.data)
        }).catch((err)=>{
          console.log(err)
        })
        
      })}
    }
    
  }
  const [matches, setMatches] = useState<any>([]);
  const [removedTeam, setRemovedTeam] = useState<any>(null);
useEffect(()=>{
  getTeamlist(),
  ()=>getTeamlist()
},[])
  useEffect(() => {
   
    if(teamList.length%2===0){
      setMatches(generateMatchSchedule(teamList));
    }
    else{
      const updatedTeams = teamList.slice(0, -1);

      // @ts-ignore
      setRemovedTeam(teamList[teamList.length-1]?.MainTeam );
      setMatches(generateMatchSchedule(updatedTeams));
    }
    postBracket()
  }, [teamList]);

  return (
    <div>
      {/* <h2>Match Schedule</h2>
      {removedTeam && <p>Removed team: {removedTeam}</p>}

      <table>
        <tbody>
          {matches.map((match:any, index:number) =>{
            const data={
              id:index+1,
              nextMatchId:match[2].nextMatchId,
              tournamentRoundText: "1",
              startTime: "",
              state: "SCHEDULED",
              participants: [
                {
                  pid:match[0].Admin,
                  resultText: null,
                  isWinner: false,
                  status: null,
                  name:match[0].MainTeam,
                },
                {
                  pid:match[1].Admin,
                  resultText: null,
                  isWinner: false,
                  status: null,
                  name:match[1].MainTeam,
                }
              ]
            }
           
           return(
            <tr key={index}>
              <td>{match[0]?.MainTeam}</td>
              <td>vs</td>
              <td>{match[1]?.MainTeam}</td>
            </tr>
          )})}
        </tbody>
      </table> */}
    </div>
  );
};

export default Schedule;














// import React, { useState } from 'react';

// const Tournament = () => {
//   const [roundOneMatches, setRoundOneMatches] = useState([
//     {id: 1, teams: ["Team A", "Team B"], winner: "Team A"},
//     {id: 2, teams: ["Team C", "Team D"], winner: "Team C"},
//     {id: 3, teams: ["Team E", "Team F"], winner: "Team F"},
//     {id: 4, teams: ["Team G", "Team H"], winner: "Team G"},
//   ]);
//   const [roundTwoMatches, setRoundTwoMatches] = useState([
//     {id: roundOneMatches.length + 1, teams: [roundOneMatches[0].winner, roundOneMatches[1].winner]},
//     {id: roundOneMatches.length + 2, teams: [roundOneMatches[2].winner, roundOneMatches[3].winner]},
//   ]);

//   return (
//     <div>
//       <h1>Round One Matches</h1>
//       <ul>
//         {roundOneMatches.map((match) => (
//           <li key={match.id}>
//             {match.teams.join(" vs ")} - Winner: {match.winner}
//           </li>
//         ))}
//       </ul>
//       <h1>Round Two Matches</h1>
//       <ul>
//         {roundTwoMatches.map((match) => (
//           <li key={match.id}>
//             {match.teams.join(" vs ")}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Tournament;







// import React from 'react'
// import { simpleSmallBracket } from '../../simpleSmallBracket';
// const matches = [
//   {
//     id: 19755,
//     nextMatchId: null,
//     tournamentRoundText: "1",
//     startTime: "2021-05-30",
//     state: "SCORE_DONE",
//     participants: [
//       {
//         id: "14754a1a-932c-4992-8dec-f7f94a339960",
//         resultText: "Won",
//         isWinner: true,
//         status: "PLAYED",
//         name: "CoKe BoYz",
//         picture: "teamlogos/client_team_default_logo"
//       },
//       {
//         id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
//         resultText: "Lost",
//         isWinner: false,
//         status: "PLAYED",
//         name: "Aids Team",
//         picture: "teamlogos/client_team_default_logo"
//       }
//     ]
//   },
//   {
//     id: 19756,
//     nextMatchId: null,
//     tournamentRoundText: "1",
//     startTime: "2021-05-30",
//     state: "SCORE_DONE",
//     participants: [
//       {
//         id: "14754a1a-932c-4992-8dec-f7f94a339960",
//         resultText: "Won",
//         isWinner: true,
//         status: "PLAYED",
//         name: "CoKe BoYz",
//         picture: "teamlogos/client_team_default_logo"
//       },
//       {
//         id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
//         resultText: "Lost",
//         isWinner: false,
//         status: "PLAYED",
//         name: "Aids Team",
//         picture: "teamlogos/client_team_default_logo"
//       }
//     ]
//   },{
//     id: 19757,
//     nextMatchId: null,
//     tournamentRoundText: "2",
//     startTime: "2021-05-30",
//     state: "SCORE_DONE",
//     participants: [
//       {
//         id: "14754a1a-932c-4992-8dec-f7f94a339960",
//         resultText: "Won",
//         isWinner: true,
//         status: "PLAYED",
//         name: "CoKe BoYz",
//         picture: "teamlogos/client_team_default_logo"
//       },
//       {
//         id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
//         resultText: "Lost",
//         isWinner: false,
//         status: "PLAYED",
//         name: "Aids Team",
//         picture: "teamlogos/client_team_default_logo"
//       }
//     ]
//   },{
//     id: 19758,
//     nextMatchId: null,
//     tournamentRoundText: "2",
//     startTime: "2021-05-30",
//     state: "SCORE_DONE",
//     participants: [
//       {
//         id: "14754a1a-932c-4992-8dec-f7f94a339960",
//         resultText: "Won",
//         isWinner: true,
//         status: "PLAYED",
//         name: "CoKe BoYz",
//         picture: "teamlogos/client_team_default_logo"
//       },
//       {
//         id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
//         resultText: "Lost",
//         isWinner: false,
//         status: "PLAYED",
//         name: "Aids Team",
//         picture: "teamlogos/client_team_default_logo"
//       }
//     ]
//   },
  
//   // other matches
// ];

// // const numTeams = 4;

// function calculateNumMatches(numTeams:any) {
//   let numMatches = numTeams / 2;
//   let round = 1;
//   let matchesInRound = [];

//   while (numMatches >= 1) {
//     matchesInRound.push({ round, numMatches });
//     numMatches = numMatches / 2;
//     round++;
//   }
//   return matchesInRound;
// }

// const matchesInRounds = calculateNumMatches(matches.length);

// for (let i = 0; i < matches.length; i++) {
//   let match = matches[i];
//   let round:any =Number(match.tournamentRoundText);
//   let numMatchesInRound = matchesInRounds[round - 1].numMatches;
//   console.log(numMatchesInRound)

//   if (i + numMatchesInRound <matches.length) {
//     match.nextMatchId = matches[i]?.id;
//   } else {
//     match.nextMatchId = null;
//   }
// }

// console.log(matches);



// const MatchInfo = () => {
//   return (
//     <div>MatchInfo</div>
//   )
// }

// export default MatchInfo