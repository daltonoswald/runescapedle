/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

/* eslint-disable react/jsx-key */
function Gameboard({guessedBosses, bossList, correctBoss}) {
  console.log(correctBoss);

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

    useEffect(() => {
      if (correctBoss.name === (bossList[boss].name)) {
        setNameStatus('correct')
      } else {
        setNameStatus('incorrect');
      }
    })

    useEffect(() => {
      if (correctBoss.level === (bossList[boss].level)) {
        setLevelStatus('correct')
      } else if (correctBoss.level > (bossList[boss].level)) {
        setLevelStatus('higher')
      } else {
        setLevelStatus('lower');
      }
    })

    useEffect(() => {
      if (correctBoss.health === (bossList[boss].health)) {
        setHealthStatus('correct')
      } else if (correctBoss.health > (bossList[boss].health)) {
        setHealthStatus('higher');
      } else {
        setHealthStatus('lower');
      }
    })

    const almostMatching = (bossList[boss].attack).filter(element => (correctBoss.attack).includes(element))

    useEffect(() => {
      if ((correctBoss.attack).toString() === (bossList[boss].attack).toString()) {
        setAttackStatus('correct')
      } else if (almostMatching.length > 0) {
        setAttackStatus('almost');
      } else {
        setAttackStatus('incorrect');

      }
    })  

    useEffect(() => {
      if (correctBoss.region === (bossList[boss].region)) {
        setRegionStatus('correct')
      } else {
        setRegionStatus('incorrect');
      }
    })

    useEffect(() => {
      if (correctBoss.release === (bossList[boss].release)) {
        setReleaseStatus('correct');
      } else if (correctBoss.release > (bossList[boss].release)) {
        setReleaseStatus('higher')
      } else {
        setReleaseStatus('lower');
      }
    })

    useEffect(() => {
      if (correctBoss.hasPet === (bossList[boss].hasPet)) {
        setHasPetStatus('correct')
      } else {
        setHasPetStatus('incorrect');
      }
    })

    let attackArray = (bossList[boss].attack).join(', ')

    return (
      <div className="guess-row">
        <img className="boss-attribute animate" src={(bossList[boss].image)}/>
        <div id={nameStatus} className="boss-attribute animate">{(bossList[boss].name)}</div>
        <div id={levelStatus} className="boss-attribute animate">{(bossList[boss].level)}</div>
        <div id={healthStatus} className="boss-attribute animate">{(bossList[boss].health)}</div>
        <div id={attackStatus} className="boss-attribute animate">{attackArray}</div>
        <div id={regionStatus} className="boss-attribute animate">{(bossList[boss].region)}</div>
        <div id={releaseStatus} className="boss-attribute animate">{(bossList[boss].release)}</div>
        <div id={hasPetStatus} className="boss-attribute animate">{(bossList[boss].hasPet)}</div>
      </div>
    )
  }

  function GameboardHeader() {
    return (
        <div className="guess-row-header">
            <div className="row-header">Image</div>
            <div className="row-header">Name</div>
            <div className="row-header">Combat Level</div>
            <div className="row-header">Health</div>
            <div className="row-header">Attack Styles</div>
            <div className="row-header">Region</div>
            <div className="row-header">Release</div>
            <div className="row-header">Pet?</div>
        </div>
    )
  }

  export default Gameboard