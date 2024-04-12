import { useState, useEffect } from 'react'
import {format } from 'date-fns'
import { bossList } from './bossList'

function App() {
  const [guessedBoss, setGuessedBoss] = useState('');
  const [guessedIndex, setGuessedIndex] = useState(-1);
  const [correctBoss, setCorrectBoss] = useState({});
  const [status, setStatus] = useState('Please select a guess');


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
  console.log(`You have guessed ${name}`)
  console.log(`You have guessed ${guessedBoss}`)

  function handleGuess(e) {
    const guessedNameValue = e.target.value;
    let indexVal = bossList.findIndex(x => x.name === `${guessedNameValue}`)
    setGuessedBoss(guessedNameValue);
    setGuessedIndex(indexVal);
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

  function showAll(e) {
    let bossVal = e.target.value;
    setGuessedIndex(e.target.value);
    console.log(bossVal);
    console.log(bossList[bossVal].name)
    console.log(bossList[bossVal].level)
    console.log(bossList[bossVal].health)
    console.log(bossList[bossVal].attack)
    console.log(bossList[bossVal].region)
    console.log(bossList[bossVal].release)
    console.log(bossList[bossVal].hasPet)
  }

  // let keys = Object.keys(bossList);
  // for (let i = 0; i < keys.length; i++) {
  //   let val = bossList[keys[i]];
  //   console.log(val.name);
  // }

  // console.log(bossList[28])


  return (
    <>
    <div>You have guessed {guessedBoss}</div>
    <div>The correct boss was {correctBoss.name} {correctBoss.level} {correctBoss.health} {correctBoss.attack} {correctBoss.region} {correctBoss.release} {correctBoss.hasPet} </div>
    <div>{status}</div>

    <button id="25" onClick={showAll}>25</button>
    <input htmlFor="bossId" type='number' onChange={showAll}></input>
    <select 
      value={guessedBoss}
      onChange={handleGuess}
    >
      {bossList.map((boss) => <option key={boss.name} id={boss.name} value={boss.name}>{boss.name}</option>)}
    </select>
    <GuessedIndexInfo guessedIndex={guessedIndex} bossList={bossList} />
    </>
  )
}

function GuessedIndexInfo({guessedIndex, bossList}) {
  console.log(bossList[guessedIndex])

  if (guessedIndex === -1) {
    return (
      <div>make a guess</div>
  )
  } else {
    return (
      <div>
        <div>{(bossList[guessedIndex].name)}</div>
        <div>{(bossList[guessedIndex].level)}</div>
        <div>{(bossList[guessedIndex].health)}</div>
        <div>{(bossList[guessedIndex].attack)}</div>
        <div>{(bossList[guessedIndex].region)}</div>
        <div>{(bossList[guessedIndex].release)}</div>
        <div>{(bossList[guessedIndex].hasPet)}</div>
      </div>
    )
  }

}

export default App
