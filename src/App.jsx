import surprises from './datas/surprises.json';

function App() {

  const [openCard, setOpenCard] = useState(false);
  const [cardContent, setCardContent] = useState({});
  const [data] = useState(surprises);
  const [count, setCount] = useState(1);
  const [end, setEnd] = useState(false);

  const handleClick = () => {
      setCount(count + 1);
      if(count < data.length){
        setCardContent(data[count]);
        setOpenCard(!openCard);
      }else{
        setEnd(!end);
        setCardContent({})
      }
  }

  const handleClickClose = () => {
    setOpenCard(!openCard);
  }

  return (
    <div className="App">      
      <main>
        {
          end && 
          <h1 style={{ textAlign:'center'}}>Merci de m'avoir écouté !</h1>
        }
        <div className='cards-bloc'>
              <div className='deck' onClick={handleClick}>
                  <div className='back-card'></div>
                  <div className='back-card'></div>
                  <div className='back-card'></div>
                  <div className='back-card'></div>
                  <div className='back-card'></div>
              </div>
              {
                  openCard && 
              <div className='dialog-card'>
                  <div className={`card ${openCard ? 'openCard' :'closeCard'}`}>
                      <div className={`showCard` } >
                        <span className='closeButton' onClick={handleClickClose}>+</span>
                        <div>
                            <h1>{cardContent.title}</h1>
                            <p>{cardContent.content}</p>
                        </div>
                      </div>
                  </div>
                  {
                    cardContent.img &&
                    <img src={cardContent.img} alt='img' />
                  }
              </div>
              }
          </div>
      </main>
    </div>
  );
}

export default App;
