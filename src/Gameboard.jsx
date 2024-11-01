/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

/* eslint-disable react/jsx-key */
function Gameboard({guessedBosses, bossList, correctBoss, guessedScores, setGuessedScores}) {

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
                <GuessedBoss bossList={bossList} boss={boss} correctBoss={correctBoss} guessedScores={guessedScores} setGuessedScores={setGuessedScores} />
            )}
        </div>
        </>
        )
    }
  }

  function ScoreMaker( bossList, boss, correctBoss, guessedScores, setGuessedScores ) {
    const almostMatching = (bossList[boss].attack).filter(element => (correctBoss.attack).includes(element))

    const newArr = [];
      if (correctBoss.name === (bossList[boss].name)) {
        newArr.push('C')
      } else {
        newArr.push('I');
      }
      if (correctBoss.level === (bossList[boss].level)) {
        newArr.push('C')
      } else if (correctBoss.level > (bossList[boss].level)) {
        newArr.push('H');
      } else {
        newArr.push('L');
      }
      if (correctBoss.health === (bossList[boss].health)) {
        newArr.push('C');
      } else if (correctBoss.health > (bossList[boss].health)) {
        newArr.push('H');
      } else {
        newArr.push('L');
      }
      if ((correctBoss.attack).toString() === (bossList[boss].attack).toString()) {
        newArr.push('C');
      } else if (almostMatching.length > 0) {
        newArr.push('A');
      } else {
        newArr.push('I');
      }
      if (correctBoss.region === (bossList[boss].region)) {
        newArr.push('C');
      } else {
        newArr.push('I');
      }
      if (correctBoss.release === (bossList[boss].release)) {
        newArr.push('C');
      } else if (correctBoss.release > (bossList[boss].release)) {
        newArr.push('H');
      } else {
        newArr.push('L');
      }
      if (correctBoss.hasPet === (bossList[boss].hasPet)) {
        newArr.push('C');
      } else {
        newArr.push('I');
      }
      console.log(newArr);
      console.log(guessedScores);
      useEffect(() => {
        setGuessedScores(newArr);
      }, [newArr])
      return newArr;
      // setGuessedScores(...guessedScores, newArr);
      // setGuessedScores(guessedScores => [...guessedScores, ...newArr]);
  }

  function GuessedBoss({ bossList, boss, correctBoss, guessedScores, setGuessedScores }) {
    const [nameStatus, setNameStatus] = useState('');
    const [levelStatus, setLevelStatus] = useState('');
    const [healthStatus, setHealthStatus] = useState('');
    const [attackStatus, setAttackStatus] = useState('');
    const [regionStatus, setRegionStatus] = useState('');
    const [releaseStatus, setReleaseStatus] = useState('');
    const [hasPetStatus, setHasPetStatus] = useState('');

    const [scoreline, setScoreline] = useState([]);
    const [scoreSheet, setScoreSheet] = useState([]);

    // scoreMaker(bossList, boss, correctBoss, guessedScores, setGuessedScores);
    // ScoreMaker({bossList, boss, correctBoss, guessedScores, setGuessedScores});
    console.log(scoreline);
    console.log(scoreSheet);


    const almostMatching = (bossList[boss].attack).filter(element => (correctBoss.attack).includes(element))
    useEffect(() => {
      if (correctBoss.name === (bossList[boss].name)) {
        setNameStatus('correct')
        setScoreline(scoreline => [...scoreline, "C"])
        return
      } else {
        setNameStatus('incorrect');
        setScoreline(scoreline => [...scoreline, "I"])
        return
      }
    }, [])

    useEffect(() => {
      if (correctBoss.level === (bossList[boss].level)) {
        setLevelStatus('correct')
        setScoreline(scoreline => [...scoreline, "C"])
        return
      } else if (correctBoss.level > (bossList[boss].level)) {
        setLevelStatus('higher')
        setScoreline(scoreline => [...scoreline, "H"])
        return
      } else {
        setLevelStatus('lower');
        setScoreline(scoreline => [...scoreline, "L"])
        return
      }
    }, [])

    useEffect(() => {
      if (correctBoss.health === (bossList[boss].health)) {
        setHealthStatus('correct')
        setScoreline(scoreline => [...scoreline, "C"])
      } else if (correctBoss.health > (bossList[boss].health)) {
        setHealthStatus('higher');
        setScoreline(scoreline => [...scoreline, "H"])
      } else {
        setHealthStatus('lower');
        setScoreline(scoreline => [...scoreline, "L"])
      }
    }, [])

    useEffect(() => {
      if ((correctBoss.attack).toString() === (bossList[boss].attack).toString()) {
        setAttackStatus('correct')
        setScoreline(scoreline => [...scoreline, "C"])
      } else if (almostMatching.length > 0) {
        setAttackStatus('almost');
        setScoreline(scoreline => [...scoreline, "A"])
      } else {
        setAttackStatus('incorrect');
        setScoreline(scoreline => [...scoreline, "I"])
      }
    }, [])  

    useEffect(() => {
      if (correctBoss.region === (bossList[boss].region)) {
        setRegionStatus('correct')
        setScoreline(scoreline => [...scoreline, "C"])
      } else {
        setRegionStatus('incorrect');
        setScoreline(scoreline => [...scoreline, "I"])
      }
    }, [])

    useEffect(() => {
      if (correctBoss.release === (bossList[boss].release)) {
        setReleaseStatus('correct');
        setScoreline(scoreline => [...scoreline, "C"])
      } else if (correctBoss.release > (bossList[boss].release)) {
        setReleaseStatus('higher')
        setScoreline(scoreline => [...scoreline, "H"])
      } else {
        setReleaseStatus('lower');
        setScoreline(scoreline => [...scoreline, "L"])
      }
    }, [])

    useEffect(() => {
      if (correctBoss.hasPet === (bossList[boss].hasPet)) {
        setHasPetStatus('correct')
        setScoreline(scoreline => [...scoreline, "C"])
      } else {
        setHasPetStatus('incorrect');
        setScoreline(scoreline => [...scoreline, "I"])
      }
    }, [])

    useEffect(() => {
      if (scoreline.length === 7) {
        setScoreSheet(scoreSheet => [...scoreSheet, scoreline])
      } else {
        return;
      }
    }, [scoreline])
    

    let attackArray = (bossList[boss].attack).join(', ')

    return (
      <>
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
      </>
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
            <div className="row-header">Drops Pet</div>
        </div>
    )
  }

  export default Gameboard