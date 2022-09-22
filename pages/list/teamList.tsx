import React from 'react';
import TeamCard from '../components/teams/teamCard';
import teamData from '../data/teams.json';


function TeamList() {
  return (
    <div className='team_content'>
        {
        teamData && teamData.map(team =>{
          return(
            <TeamCard key={team.id} name={team.name}  profilPic={team.profilPic} poste={team.poste}/>
          )
        })
      }
    </div>
  )
}

export default TeamList;
