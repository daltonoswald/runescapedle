/* eslint-disable react/jsx-key */
import { useState, useEffect, useRef } from 'react'
import { bossList } from './bossList'
import { options } from './options'
import './styles.css'
import SearchableDropdown from './dropdown/SearchableDropdown';
import Gameboard from './gameboard/Gameboard';
import EndPanel from './endPanel/EndPanel';
import Key from './key/Key';

function App() {
  const [guessedBosses, setGuessedBosses] = useState([]);
  // const [guessedIndex, setGuessedIndex] = useState(-1);
  const [correctBoss, setCorrectBoss] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [status, setStatus] = useState('Please select a guess');
  const [guessedScores, setGuessedScores] = useState();
  const [scoreSheet, setScoreSheet] = useState([]);
  const [value, setValue] = useState("")
  const [openKey, setOpenKey] = useState(true);


  const day = new Date().getDate();
  const month = new Date().getMonth();

  function random() {
    let num = Math.round((day+4) / month * 13034431).toString();
    return +(num[2] + num[3]) % 44;
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
      setStatus('Correct.')
      setTimeout(() => {
        setGameOver(true);
      }, "4000");
    } else {
      setStatus('Incorrect');
    }
  }

  return (
    <>
    <SearchableDropdown 
      bossList={bossList}
      options={options}
      label="name"
      selectedVal={value}
      handleChange={(val) => setValue(val)}
      handleGuess={handleGuess}
      gameOver={gameOver}
      />
    <Gameboard guessedBosses={guessedBosses} bossList={bossList} correctBoss={correctBoss} guessedScores={guessedScores} setGuessedScores={setGuessedScores}
      scoreSheet={scoreSheet} setScoreSheet={setScoreSheet} />
    {(gameOver) && (
      <EndPanel 
        gameOver={gameOver}
        correctBoss={correctBoss} 
        guessCount={guessCount} 
        guessedScores={guessedScores} 
        scoreSheet={scoreSheet} 
        setScoreSheet={setScoreSheet}
        />
    )}
      {(openKey && guessCount > 0) && (
        <Key openKey={openKey} setOpenKey={setOpenKey} />
      )}

    </>
  )
}


export default App
