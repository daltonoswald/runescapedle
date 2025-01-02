import { useEffect, useRef } from "react";
import "./endPanel.css";

function EndPanel({ gameOver, correctBoss, guessCount, scoreSheet}) {
    const scrollRef = useRef(null);
    const scrollTo = () => scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    useEffect(() => {
        if (gameOver) {
            scrollTo();
        }
    })

    function shareableString(){
        let copyMessage;
        if (scoreSheet.length === 1 ){
            copyMessage = `I solved the daily Runescapedle in ${guessCount} attempt!`
        } else {
            copyMessage = `I solved the daily Runescapedle in ${guessCount} attempts!`
        }
        const copyMessageLink = `https://daltonoswald-runescapedle.netlify.app`
        navigator.clipboard.writeText(
                copyMessage + 
                "\n" + 
                scoreSheet.toString().replace(/(.*?,.*?,.*?,.*?,.*?,.*?,.*?,)/g, '$1'+'\n').replaceAll(",", "") + 
                "\n" + 
                copyMessageLink)
    }

    return(
        <div className='end-panel' ref={scrollRef}>
            <h2 className='win-message'>You won!</h2>
            <div className="correct-answer">
                <img className="correct-image" src={(correctBoss.image)} />
                <div className='correct-name'>{correctBoss.name}</div>
            </div>
            <div className="number-attempts">Number of attempts: {guessCount}</div>
            {scoreSheet.map(score => (
                <p key={score} className="scoreline">{score}</p>
            ))}
            <button className="share-button" onClick={shareableString}>Copy Results</button>

        </div>
    )
}

export default EndPanel