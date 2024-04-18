/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import {format } from 'date-fns'
import { bossList } from './bossList'
import './styles.css'
import SearchableDropdown from './SearchableDropdown';
import Gameboard from './Gameboard';

function App() {
  const [guessedBosses, setGuessedBosses] = useState([]);
  const [guessedIndex, setGuessedIndex] = useState(-1);
  const [correctBoss, setCorrectBoss] = useState({});
  const [status, setStatus] = useState('Please select a guess');

  const [value, setValue] = useState("")


  useEffect(() => {
    let randomBoss = bossList[Math.floor(Math.random()*bossList.length)]
    // setCorrectBoss(randomBoss)
    setCorrectBoss({
      name: randomBoss.name,
      level: randomBoss.level,
      health: randomBoss.health,
      attack: randomBoss.attack,
      region: randomBoss.region,
      // release: randomBoss.release,
      release: format(new Date(randomBoss.release), 'MM-dd-yyyy'),
      hasPet: randomBoss.hasPet,
    })
  },[])

  console.log(`The correctBoss name  ${correctBoss.name}`);
  console.log(`You have guessed ${guessedBosses}`)
  console.log(guessedBosses)

  function handleGuess(name) {
    const guessedNameValue = name;
    console.log(guessedNameValue);
    let indexVal = bossList.findIndex(x => x.name === `${guessedNameValue}`)
    setGuessedBosses([...guessedBosses, indexVal]);
    if (correctBoss.name === guessedNameValue) {
      console.log("Correct Guess");
      setStatus('Correct.')
    } else {
      console.log("Incorrect guess");
      setStatus('Incorrect');
    }
    console.log(name);
  }

  return (
    <>
    {/* <div>You have guessed {bossList[guessedBosses].name}</div> */}
    <div>The correct boss was {correctBoss.name} {correctBoss.level} {correctBoss.health} {correctBoss.attack} {correctBoss.region} {correctBoss.release} {correctBoss.hasPet} </div>
    <div>{status}</div>

    <SearchableDropdown 
      options={bossList}
      label="name"
      id="id"
      level="level"
      image="image"
      region="region"
      selectedVal={value}
      handleChange={(val) => setValue(val)}
      handleGuess={handleGuess}
      />
    <Gameboard guessedBosses={guessedBosses} bossList={bossList} />

    </>
  )
}


export default App
