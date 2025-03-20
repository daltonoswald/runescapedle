/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import { bossList } from './bossList'
import { options } from './options'
import './styles.css'
import SearchableDropdown from './dropdown/SearchableDropdown';
import Gameboard from './gameboard/Gameboard';
import EndPanel from './endPanel/EndPanel';
import Key from './key/Key';

function App() {
  const [guessedBosses, setGuessedBosses] = useState([]);
  // const [guessedBosses, setGuessedBosses] = useState(() => {
  //   const localValue = localStorage.getItem('ITEMS')
  //   if (localValue == null) return []

  //   return JSON.parse(localValue);
  // });
  const [correctBoss, setCorrectBoss] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [status, setStatus] = useState('Guess a boss...');
  const [scoreSheet, setScoreSheet] = useState([]);
  const [value, setValue] = useState("")
  const [openKey, setOpenKey] = useState(true);


  const day = new Date().getDate();
  const month = new Date().getMonth();

  function random() {
    let num = Math.round((day+4) / (month+1) * 13034431).toString();
    // return +(num[2] + num[3]) % 44;
    return +(num[2] + num[3]) % bossList.length;
  }
  useEffect(() => {    
    // let randomBoss = bossList[Math.floor(Math.random()*bossList.length)]
    let randomBoss = bossList[random()]
    setCorrectBoss({
      name: randomBoss.name,
      level: randomBoss.level,
      health: randomBoss.health,
      attack: randomBoss.attack,
      region: randomBoss.region,
      release: randomBoss.release,
      hasPet: randomBoss.hasPet,
      image: randomBoss.image
    })
  },[bossList])

  function handleGuess(name) {
    const guessedNameValue = name;
    let indexVal = bossList.findIndex(x => x.name === `${guessedNameValue}`)
    setGuessedBosses([...guessedBosses, indexVal]);
    setGuessCount(guessCount + 1);
    if (correctBoss.name === guessedNameValue) {
      setTimeout(() => {
        setGameOver(true);
        setStatus('You won!')
      }, "4000");
    } else {
      // setStatus('Incorrect');
    }
  }

  // useEffect(() => {
  //   localStorage.setItem('ITEMS', JSON.stringify(guessedBosses))
  //   console.log(guessedBosses);
  // }, [guessedBosses])

  return (
    <>
    <SearchableDropdown 
      bossList={bossList}
      options={options}
      label="name"
      selectedVal={value}
      handleChange={(val) => setValue(val)}
      handleGuess={handleGuess}
      status={status}
      gameOver={gameOver}
      />
    <Gameboard guessedBosses={guessedBosses} bossList={bossList} correctBoss={correctBoss} setScoreSheet={setScoreSheet} />
    {(gameOver) && (
      <EndPanel 
        gameOver={gameOver}
        correctBoss={correctBoss} 
        guessCount={guessCount} 
        scoreSheet={scoreSheet} 
        />
    )}
      {(openKey && guessCount > 0) && (
        <Key setOpenKey={setOpenKey} />
      )}

    </>
  )
}


export default App
