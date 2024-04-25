/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import { bossList } from './bossList'
import { options } from './options'
import './styles.css'
import SearchableDropdown from './SearchableDropdown';
import Gameboard from './Gameboard';

function App() {
  const [guessedBosses, setGuessedBosses] = useState([]);
  const [guessedIndex, setGuessedIndex] = useState(-1);
  const [correctBoss, setCorrectBoss] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [status, setStatus] = useState('Please select a guess');

  const [value, setValue] = useState("")


  useEffect(() => {
    let randomBoss = bossList[Math.floor(Math.random()*bossList.length)]
    setCorrectBoss({
      name: randomBoss.name,
      level: randomBoss.level,
      health: randomBoss.health,
      attack: randomBoss.attack,
      region: randomBoss.region,
      release: randomBoss.release,
      hasPet: randomBoss.hasPet,
    })
  },[bossList])

  function handleGuess(name) {
    const guessedNameValue = name;
    let indexVal = bossList.findIndex(x => x.name === `${guessedNameValue}`)
    setGuessedBosses([...guessedBosses, indexVal]);
    setGuessCount(guessCount + 1);
    if (correctBoss.name === guessedNameValue) {
      setStatus('Correct.')
      setGameOver(true);
    } else {
      setStatus('Incorrect');
    }
  }

  return (
    <>
    {/* <div>The correct boss was {correctBoss.name} {correctBoss.level} {correctBoss.health} {correctBoss.attack} {correctBoss.region} {correctBoss.release} {correctBoss.hasPet} </div>
    <div>{status}</div> */}
    <div>Guess count: {guessCount}</div>
    <SearchableDropdown 
      bossList={bossList}
      options={options}
      label="name"
      selectedVal={value}
      handleChange={(val) => setValue(val)}
      handleGuess={handleGuess}
      gameOver={gameOver}
      />
    <Gameboard guessedBosses={guessedBosses} bossList={bossList} correctBoss={correctBoss} />

    </>
  )
}


export default App
