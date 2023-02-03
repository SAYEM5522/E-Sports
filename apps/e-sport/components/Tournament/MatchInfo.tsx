
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
    const getTeamlist=async()=>{
    const eventid=Cookies.get("_m_t_id_")
    await axios.get(`http://localhost:8081/getManyVManyRoute/${eventid}`).then((res)=>{
      setTeamList(res.data)
   }).catch((err)=>{
      console.log(err)
   })
  }
  useEffect(()=>{
  getTeamlist(),
  ()=>getTeamlist()
  },[])
  const [matches, setMatches] = useState<any>([]);
  const [removedTeam, setRemovedTeam] = useState<any>(null);

  useEffect(() => {
    if(teamList.length%2===0){
      setMatches(generateMatchSchedule(teamList));
    }
    else{
      const updatedTeams = teamList.slice(0, -1);
      setRemovedTeam(teamList[teamList.length-1]?.MainTeam );
      setMatches(generateMatchSchedule(updatedTeams));
    }
  }, [teamList]);
  console.log(matches)

  return (
    <div>
      <h2>Match Schedule</h2>
      {removedTeam && <p>Removed team: {removedTeam}</p>}

      <table>
        <tbody>
          {matches.map((match:any, index:number) => (
            <tr key={index}>
              <td>{match[0]?.MainTeam}</td>
              <td>vs</td>
              <td>{match[1]?.MainTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
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