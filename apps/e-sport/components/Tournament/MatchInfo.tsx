// import axios from 'axios'
// import Cookies from 'js-cookie'
// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { selectReamingTimeIndicator } from '../../feature/userSlice'

// const MatchInfo = () => {
//   const getTeamlist=async()=>{
//     const eventid=Cookies.get("_m_t_id_")
//     await axios.get(`http://localhost:8081/getManyVManyRoute/${eventid}`).then((res)=>{
//       console.log(res.data)
//    }).catch((err)=>{
//       console.log(err)
//    })
//   }
//   useEffect(()=>{
//   getTeamlist(),
//   ()=>getTeamlist()
//   },[])

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default MatchInfo
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
    schedule.push([shuffledTeams[i], shuffledTeams[n - i - 1]]);
  }
  return schedule;
};

const Schedule = () => {
  const [teams, setTeams] = useState([
    'Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 
  ]);
  const [matches, setMatches] = useState<any>([]);
  const [removedTeam, setRemovedTeam] = useState<string | undefined>(undefined);

  useEffect(() => {
    if(teams.length%2===0){
      setMatches(generateMatchSchedule(teams));
    }
    else{
      const updatedTeams = teams.slice(0, -1);
      setRemovedTeam(teams[teams.length-1]);
      setMatches(generateMatchSchedule(updatedTeams));
    }
  }, [teams]);

  return (
    <div>
      <h2>Match Schedule</h2>
      {removedTeam && <p>Removed team: {removedTeam}</p>}

      <table>
        <tbody>
          {matches.map((match:any, index:number) => (
            <tr key={index}>
              <td>{match[0]}</td>
              <td>vs</td>
              <td>{match[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;