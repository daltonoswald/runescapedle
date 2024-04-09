import { useState, useEffect } from 'react'
import {format } from 'date-fns'
import { bossList } from './bossList'

function App() {
  const [guessedBoss, setGuessedBoss] = useState(`Kree'arra`);
  const [correctBoss, setCorrectBoss] = useState({});
  const [status, setStatus] = useState('');


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

  console.log(bossList);
  console.log(`The correctBoss name  ${correctBoss.name}`);
  console.log(`You have guessed ${guessedBoss}`)
  console.log(correctBoss.release);

  if (correctBoss.name === guessedBoss) {
    console.log("Correct Guess");
  } else {
    console.log("Incorrect guess");
  }


  return (
    <>
    <div>You have guessed {guessedBoss}</div>
    <div>The correct boss was {correctBoss.name} {correctBoss.level} {correctBoss.health} {correctBoss.attack} {correctBoss.region} {correctBoss.release} {correctBoss.hasPet} </div>
    <div>{status}</div>
    <button onClick={() => {setGuessedBoss(`General Graardor`)}}>General Graardor</button>
    <button onClick={() => {setGuessedBoss(`Kree'arra`)}}>Kree</button>
    <button onClick={() => {setGuessedBoss(`Commander Zilyana`)}}>Commander Zilyana</button>
    <button onClick={() => {setGuessedBoss(`K'ril Tsutsaroth`)}}>K&apos;ril Tsutsaroth</button>
    </>
  )
}

export default App
