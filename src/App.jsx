import surprises from './datas/surprises.json';
import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { useSessionStorage } from 'usehooks-ts';
import { Score } from "./components/Score";
import { Timer } from "./components/Timer";
import { Wireframe } from './components/Wireframe';

function App() {

  const [openCard, setOpenCard] = useState(false);
  const [cardContent, setCardContent] = useState({});
  const [team1, setTeam1] = useSessionStorage('team1');
  const [team2, setTeam2] = useSessionStorage('team2');
  const [team3, setTeam3] = useSessionStorage('team3');
  const [team4, setTeam4] = useSessionStorage('team4');
  const [team1Data, setTeam1Data] = useState();
  const [team2Data, setTeam2Data] = useState();
  const [team3Data, setTeam3Data] = useState();
  const [team4Data, setTeam4Data] = useState();

  const randomChoose = (tab) => {
      const randomIndex = Math.floor(Math.random() * tab.length);
      return tab[randomIndex];
  }

  const handleClick = () => {
      const card = randomChoose(surprises);
      setCardContent(card);
      setOpenCard(!openCard);
  }

  const handleClickChooseTeam1 = (e) => {
      const value = e.target.value;
      team1.cards.push(value);
      setTeam1(team1);
      setTeam1Data(team1);
      setOpenCard(!openCard);
  }
  const handleClickChooseTeam2 = (e) => {
      const value = e.target.value;
      team2.cards.push(value);
      setTeam2(team2);
      setTeam2Data(team2);
      setOpenCard(!openCard);
  }
  const handleClickChooseTeam3 = (e) => {
      const value = e.target.value;
      team3.cards.push(value);
      setTeam3(team3);
      setTeam3Data(team3);
      setOpenCard(!openCard);
  }
  const handleClickChooseTeam4 = (e) => {
      const value = e.target.value;
      team4.cards.push(value);
      setTeam4(team4);
      setTeam4Data(team4);
      setOpenCard(!openCard);
  }
  console.log(team1Data)

  useEffect(() => {
    const t1 = JSON.stringify(team1);
    const t2 = team2;
    const t3 = team3;
    const t4 = team4;
    console.log(`T1 = ${JSON.stringify(t1)}`)
    setTeam1Data(t1)
    console.log(`Team1Data = ${JSON.stringify(team1Data)}`)
    setTeam2Data(t2)
    setTeam3Data(t3)
    setTeam4Data(t4)

  }, [])

  return (
    <div className="App">      
      <main>
        <div className='cards-bloc'>
              <div className='deck' onClick={handleClick}>
                  <div className='back-card'><p>SURPRISE DELIVERY !</p></div>
                  <div className='back-card'><p>SURPRISE DELIVERY !</p></div>
                  <div className='back-card'><p>SURPRISE DELIVERY !</p></div>
                  <div className='back-card'><p>SURPRISE DELIVERY !</p></div>
                  <div className='back-card'><p>SURPRISE DELIVERY !</p></div>
              </div>
              {
                  openCard && 
              <div className='dialog-card'>
                  <div className={`card ${openCard ? 'openCard' :'closeCard'}`}>
                      <div className={`showCard` } >
                        <span className='closeButton' onClick={handleClick}>+</span>
                        <div>
                            <h1>{cardContent.isBonus ? 'BONUS' : 'PENALTY'}</h1>
                            <p>{cardContent.content}</p>
                        </div>
                      </div>
                  </div>
                  {/* <div className='button-list-teams'>
                      { team1 && <Button onClick={handleClickChooseTeam1} value={cardContent.id} content={team1.name}/> }
                      { team2 && <Button onClick={handleClickChooseTeam2} value={cardContent.id} content={team2.name}/> }
                      { team3 && <Button onClick={handleClickChooseTeam3} value={cardContent.id} content={team3.name}/> }
                      { team4 && <Button onClick={handleClickChooseTeam4} value={cardContent.id} content={team4.name}/> }
                  </div> */}
              </div>
              }
          </div>
        <Timer />
        {/* <Score team1={team1Data} team2={team2Data} team3={team3Data} team4={team4Data} /> */}
        <Wireframe />
      </main>
    </div>
  );
}

export default App;
