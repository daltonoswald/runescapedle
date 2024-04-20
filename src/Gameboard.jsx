/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

/* eslint-disable react/jsx-key */
function Gameboard({guessedBosses, bossList, correctBoss}) {
  const [guessState, setGuessState] = useState('')

  // const correct = correctBoss.name === guessedBosses;
  // const almost = !correct && guessedBosses !== "" && guessedBosses.includes(guessedBosses)

  // const guessState = (correct ? "correct" : almost ? "almost" : "incorrect");

    if (guessedBosses.length === 0) {
      return (
        <div className="guess-container">
            <GameboardHeader />
        </div>
    )
    } else {
      return (
        <>
        <div className="guess-container">
            <GameboardHeader />
            {guessedBosses.map((boss) => 
                <GuessedBoss bossList={bossList} boss={boss} correctBoss={correctBoss} />
            )}
        </div>
        </>
        )
    }
  }

  function GuessedBoss({ bossList, boss, correctBoss }) {
    const [nameStatus, setNameStatus] = useState('');
    const [levelStatus, setLevelStatus] = useState('');
    const [healthStatus, setHealthStatus] = useState('');
    const [attackStatus, setAttackStatus] = useState('');
    const [regionStatus, setRegionStatus] = useState('');
    const [releaseStatus, setReleaseStatus] = useState('');
    const [hasPetStatus, setHasPetStatus] = useState('');

    console.log(correctBoss.name);
    console.log((bossList[boss].name))

    useEffect(() => {
      if (correctBoss.name === (bossList[boss].name)) {
        setNameStatus('correct')
        console.log('correct');
      } else {
        setNameStatus('incorrect');
        console.log('incorrect');
      }
    })

    useEffect(() => {
      if (correctBoss.level === (bossList[boss].level)) {
        setLevelStatus('correct')
        console.log('correct');
      } else {
        setLevelStatus('incorrect');
        console.log('incorrect');
      }
    })

    useEffect(() => {
      if (correctBoss.health === (bossList[boss].health)) {
        setHealthStatus('correct')
        console.log('correct');
      } else {
        setHealthStatus('incorrect');
        console.log('incorrect');
      }
    })

    useEffect(() => {
      if (correctBoss.attack === (bossList[boss].attack)) {
        setHealthStatus('correct')
        console.log('correct');
      } else {
        setHealthStatus('incorrect');
        console.log('incorrect');
      }
    })  

    useEffect(() => {
      if (correctBoss.region === (bossList[boss].region)) {
        setRegionStatus('correct')
        console.log('correct');
      } else {
        setRegionStatus('incorrect');
        console.log('incorrect');
      }
    })

    useEffect(() => {
      if (correctBoss.release === (bossList[boss].release)) {
        setReleaseStatus('correct')
        console.log('correct');
      } else {
        setReleaseStatus('incorrect');
        console.log('incorrect');
      }
    })

    useEffect(() => {
      if (correctBoss.hasPet === (bossList[boss].hasPet)) {
        setHasPetStatus('correct')
        console.log('correct');
      } else {
        setHasPetStatus('incorrect');
        console.log('incorrect');
      }
    })

    return (
      <div className="guess-row">
      <img className="boss-attribute" src={(bossList[boss].image)}/>
      <div id={nameStatus} className="boss-attribute">{(bossList[boss].name)}</div>
      <div id={levelStatus} className="boss-attribute">{(bossList[boss].level)}</div>
      <div id={healthStatus} className="boss-attribute">{(bossList[boss].health)}</div>
      <div id={attackStatus} className="boss-attribute">{(bossList[boss].attack)}</div>
      <div id={regionStatus} className="boss-attribute">{(bossList[boss].region)}</div>
      <div id={releaseStatus} className="boss-attribute">{(bossList[boss].release)}</div>
      <div id={hasPetStatus} className="boss-attribute">{(bossList[boss].hasPet)}</div>
      </div>
    )
  }

  function GameboardHeader() {
    return (
        <div className="guess-row-header">
            <div className="row-header">Image</div>
            <div className="row-header">Name</div>
            <div className="row-header">Level</div>
            <div className="row-header">Health</div>
            <div className="row-header">Attack Styles</div>
            <div className="row-header">Region</div>
            <div className="row-header">Release</div>
            <div className="row-header">Pet?</div>
        </div>
    )
  }

  export default Gameboard