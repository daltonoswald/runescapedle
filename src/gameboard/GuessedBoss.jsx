import { useState, useEffect, useRef } from "react";

// export default function GuessedBoss({ bossList, boss, correctBoss, guessedScores, setGuessedScores, scoreSheet, setScoreSheet }) {
  export default function GuessedBoss({ bossList, boss, correctBoss, setScoreSheet }) {
    const [nameStatus, setNameStatus] = useState('');
    const [levelStatus, setLevelStatus] = useState('');
    const [healthStatus, setHealthStatus] = useState('');
    const [attackStatus, setAttackStatus] = useState('');
    const [regionStatus, setRegionStatus] = useState('');
    const [releaseStatus, setReleaseStatus] = useState('');
    const [hasPetStatus, setHasPetStatus] = useState('');
    const scrollRef = useRef(null);
    const scrollTo = () => scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const [scoreline, setScoreline] = useState([]);


    const almostMatching = (bossList[boss].attack).filter(element => (correctBoss.attack).includes(element))
    useEffect(() => {
      scrollTo();
      if (correctBoss.name === (bossList[boss].name)) {
        setNameStatus('correct')
        setScoreline(scoreline => [...scoreline, "🟩"])
        return
      } else {
        setNameStatus('incorrect');
        setScoreline(scoreline => [...scoreline, "🟥"])
        return
      }
    }, [])

    useEffect(() => {
      if (correctBoss.level === (bossList[boss].level)) {
        setLevelStatus('correct')
        setScoreline(scoreline => [...scoreline, "🟩"])
        return
      } else if (correctBoss.level > (bossList[boss].level)) {
        setLevelStatus('higher')
        setScoreline(scoreline => [...scoreline, "⬆️"])
        return
      } else {
        setLevelStatus('lower');
        setScoreline(scoreline => [...scoreline, "⬇️"])
        return
      }
    }, [])

    useEffect(() => {
      if (correctBoss.health === (bossList[boss].health)) {
        setHealthStatus('correct')
        setScoreline(scoreline => [...scoreline, "🟩"])
      } else if (correctBoss.health > (bossList[boss].health)) {
        setHealthStatus('higher');
        setScoreline(scoreline => [...scoreline, "⬆️"])
      } else {
        setHealthStatus('lower');
        setScoreline(scoreline => [...scoreline, "⬇️"])
      }
    }, [])

    useEffect(() => {
      if ((correctBoss.attack).toString() === (bossList[boss].attack).toString()) {
        setAttackStatus('correct')
        setScoreline(scoreline => [...scoreline, "🟩"])
      } else if (almostMatching.length > 0) {
        setAttackStatus('almost');
        setScoreline(scoreline => [...scoreline, "🟧"])
      } else {
        setAttackStatus('incorrect');
        setScoreline(scoreline => [...scoreline, "🟥"])
      }
    }, [])  

    useEffect(() => {
      if (correctBoss.region === (bossList[boss].region)) {
        setRegionStatus('correct')
        setScoreline(scoreline => [...scoreline, "🟩"])
      } else {
        setRegionStatus('incorrect');
        setScoreline(scoreline => [...scoreline, "🟥"])
      }
    }, [])

    useEffect(() => {
      if (correctBoss.release === (bossList[boss].release)) {
        setReleaseStatus('correct');
        setScoreline(scoreline => [...scoreline, "🟩"])
      } else if (correctBoss.release > (bossList[boss].release)) {
        setReleaseStatus('higher')
        setScoreline(scoreline => [...scoreline, "⬆️"])
      } else {
        setReleaseStatus('lower');
        setScoreline(scoreline => [...scoreline, "⬇️"])
      }
    }, [])

    useEffect(() => {
      if (correctBoss.hasPet === (bossList[boss].hasPet)) {
        setHasPetStatus('correct')
        setScoreline(scoreline => [...scoreline, "🟩"])
      } else {
        setHasPetStatus('incorrect');
        setScoreline(scoreline => [...scoreline, "🟥"])
      }
    }, [])

    useEffect(() => {
      if (scoreline.length === 7) {
        setScoreSheet((prevScores) => [...prevScores, [scoreline]]);
      } else {
        return;
      }
    }, [scoreline])
    

    let attackArray = (bossList[boss].attack).join(', ')

    return (
      <>
      <div className="guess-row" ref={scrollRef} >
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