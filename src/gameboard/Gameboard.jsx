/* eslint-disable react/prop-types */

import GuessedBoss from "./GuessedBoss";
import GameboardHeader from "./GameboardHeader";
import "./gameboard.css";
function Gameboard({guessedBosses, bossList, correctBoss, guessedScores, setGuessedScores, scoreSheet, setScoreSheet}) {

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
                <GuessedBoss 
                  key={boss}
                  bossList={bossList} 
                  boss={boss} 
                  correctBoss={correctBoss}
                  guessedScores={guessedScores} 
                  setGuessedScores={setGuessedScores}
                  scoreSheet={scoreSheet} 
                  setScoreSheet={setScoreSheet} />
            )}
        </div>
        </>
        )
    }
  }

  export default Gameboard