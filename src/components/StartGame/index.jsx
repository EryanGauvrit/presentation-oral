import React, { useState } from 'react';
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";

export const StartGame = () => {

    const [inputNbr, setInputNbr] = useState(2);
    const [teams, setTeams] = useState([`team0`, `team1`]);
    const navigate = useNavigate();

    const handleAddInput = () => {
        if(inputNbr < 4){
            setInputNbr(inputNbr + 1)
            teams.push(`team${inputNbr}`)
            setTeams(teams)
        }
    };

    const handleRemoveInput = () => {
        if(teams.length > 2){
            teams.pop();
            setInputNbr(inputNbr - 1)
            setTeams(teams);     
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const team1 = data.get('team0');
        const team2 = data.get('team1');
        const team3 = data.get('team2');
        const team4 = data.get('team3');
        if(team1){
            const obj = { name : team1, cards : []};
            const str = JSON.stringify(obj);
            sessionStorage.setItem("team1", str);
        }
        if(team2){
            const obj = { name : team2, cards : []};
            const str = JSON.stringify(obj);
            sessionStorage.setItem("team2", str);
        }
        if(team3){
            const obj = { name : team3, cards : []};
            const str = JSON.stringify(obj);
            sessionStorage.setItem("team3", str);
        }
        if(team4){
            const obj = { name : team4, cards : []};
            const str = JSON.stringify(obj);
            sessionStorage.setItem("team4", str);
        }
        if(team1 || team2 || team3 || team4){
            navigate('/game')
        }
    };

    return (
        <main className='home'>
            <h1>Dough to Wire</h1>
            <form onSubmit={handleSubmit}>
                {
                    teams.map((element) => 
                        <div key={element}>
                            <label>Team's name: </label>
                            <div>
                                <input type="text" name={element} />    
                                <Button className='remove-field' content='+' value={element} onClick={handleRemoveInput} />                                
                            </div>
                        </div>
                    )
                }                
                <Button className='add-field' content='New team' onClick={handleAddInput} />
                <Button type="submit" content='Start Game' />
            </form>

        </main>
    )
}