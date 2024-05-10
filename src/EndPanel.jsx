function EndPanel({ correctBoss, guessCount, gameOver }) {

    if (gameOver) {
    return(
        <div className={`end-panel ${gameOver ? "shown" : "hidden"}`}>
            <div>You won!</div>
            <div className="correct-answer">
                <img className="correct-image" src={(correctBoss.image)} />
                <div>You guessed {correctBoss.name}</div>
            </div>
            <div>Number of attempts: {guessCount}</div>
        </div>
    )
    } else {
        <>
        </>
    }
}

export default EndPanel