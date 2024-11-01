/* eslint-disable react/prop-types */
function EndPanel({ correctBoss, guessCount }) {

    return(
        <div className={`end-panel`}>
            <div className='win-message'>You won!</div>
            <div className="correct-answer">
                <img className="correct-image" src={(correctBoss.image)} />
                <div className='correct-name'>You guessed {correctBoss.name}</div>
            </div>
            <div className="number-attempts">Number of attempts: {guessCount}</div>
        </div>
    )
}

function GuessedScoresLayout({score}) {
    <p>{score}</p>
}

export default EndPanel