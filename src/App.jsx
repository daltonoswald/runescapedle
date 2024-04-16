/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import {format } from 'date-fns'
import { bossList } from './bossList'
import reactIcon from "./assets/react.svg"
import SearchableDropdown from './SearchableDropdown';

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
    console.log(guessedBosses);
    console.log(guessedNameValue)
    console.log(indexVal);
    if (correctBoss.name === guessedNameValue) {
      console.log("Correct Guess");
      setStatus('Correct.')
    } else {
      console.log("Incorrect guess");
      setStatus('Incorrect');
    }
  }

  // let keys = Object.keys(bossList);
  // for (let i = 0; i < keys.length; i++) {
  //   let val = bossList[keys[i]];
  //   console.log(val.name);
  // }

  // console.log(bossList[28])

  if (guessedBosses.length === 0) {
    return (
      <>
      <div>No guesses yet</div>
      <div>The correct boss was {correctBoss.name} {correctBoss.level} {correctBoss.health} {correctBoss.attack} {correctBoss.region} {correctBoss.release} {correctBoss.hasPet} </div>
      <div>{status}</div>
  
      <BossesGuessed guessedIndex={guessedIndex} guessedBosses={guessedBosses} />
  
      <SearchableDropdown 
        options={bossList}
        label="name"
        id="id"
        selectedVal={value}
        handleChange={(val) => setValue(val)}
        handleGuess={handleGuess}
        />
  
      </>
    )
  } else {
  return (
    <>
    {/* <div>You have guessed {bossList[guessedBosses].name}</div> */}
    <div>The correct boss was {correctBoss.name} {correctBoss.level} {correctBoss.health} {correctBoss.attack} {correctBoss.region} {correctBoss.release} {correctBoss.hasPet} </div>
    <div>{status}</div>

    <SearchableDropdown 
      options={bossList}
      label="name"
      id="id"
      selectedVal={value}
      handleChange={(val) => setValue(val)}
      handleGuess={handleGuess}
      />

    <BossesGuessed guessedBosses={guessedBosses} bossList={bossList} />

    </>
  )
}
}

function BossesGuessed({guessedBosses, bossList}) {

  if (guessedBosses.length === 0) {
    return (
      <div></div>
  )
  } else {
    return (
      <div className="guess-container">
        {guessedBosses.map((boss) => 
          <div className="guess">
            <div>{(bossList[boss].name)}</div>
            <div>{(bossList[boss].level)}</div>
            <div>{(bossList[boss].health)}</div>
            <div>{(bossList[boss].attack)}</div>
            <div>{(bossList[boss].region)}</div>
            <div>{(bossList[boss].release)}</div>
            <div>{(bossList[boss].hasPet)}</div>
          </div>
        )}
      </div>
      )
  }
}


export default App
