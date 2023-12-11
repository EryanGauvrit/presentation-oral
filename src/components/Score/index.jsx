import { useEffect, useState } from "react"
import { useSessionStorage } from "usehooks-ts";


export const Score = (team1, team2, team3, team4) => {
    const [teamsData, setTeamsData] = useState([]);

    const setTeams = (data) => {
        if(data){
            const find = teamsData.find(({ name }) => name === data.name);
            if(!find){
                teamsData.push(data)
            }
        }
        setTeamsData(teamsData);
    }

    useEffect(() => {
        console.log(`Team1 : ${JSON.stringify(team1)}`)
        // setTeams(team1)
        // console.log(teamsData)
    }, [team1,team2,team3,team4])

    return (
        <section className="score">
            {
                teamsData[0] &&
                teamsData.map((team) => 
                    // {
                        team &&
                            <div key={Math.random()}>
                                <h2>{team?.name} :</h2>
                                {
                                    team?.cards[0] ? 
                                    team.cards.map((c) => 
                                        <p>card</p>
                                    )
                                    :
                                    <p>You don't have card.</p>
                                }
                            </div>
                    // }
                )
            }
        </section>
    )
}