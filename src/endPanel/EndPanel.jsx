import "./endPanel.css";
function EndPanel({ correctBoss, guessCount, scoreSheet, setScoreSheet }) {

    console.log(scoreSheet);

    function shareableString(){
        const copyMessage = `I solved the daily Runescapedle in ${guessCount} attempts!`
                // Working with an extra space in last result -
        // navigator.clipboard.writeText(copyMessage + "\n" + (scoreSheet.toString().replaceAll(" ", "\n").replaceAll(",", "")))
        const copyMessageLink = `https://daltonoswald-runescapedle.netlify.app`
        navigator.clipboard.writeText(
                copyMessage + 
                "\n" + 
                scoreSheet.toString().replace(/(.*?,.*?,.*?,.*?,.*?,.*?,.*?,)/g, '$1'+'\n').replaceAll(",", "") + 
                "\n" + 
                copyMessageLink)
    }

    return(
        <div className='end-panel'>
            <div className='win-message'>You won!</div>
            <div className="correct-answer">
                <img className="correct-image" src={(correctBoss.image)} />
                <div className='correct-name'>You guessed {correctBoss.name}</div>
            </div>
            <div className="number-attempts">Number of attempts: {guessCount}</div>
            {scoreSheet.map(score => (
                <p key={score} className="scoreline">{score}</p>
            ))}
            {/* <button onClick={() => {navigator.clipboard.writeText(scoreSheet.toString().replace(/[!.,]/g, ''))}}>Share Results</button> */}
            <button className="share-button" onClick={shareableString}>Share Results</button>

        </div>
    )
}

export default EndPanel