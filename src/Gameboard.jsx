/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
function Gameboard({guessedBosses, bossList}) {

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
                <div className="guess-row">
                <img className="boss-attribute" src={(bossList[boss].image)}/>
                <div className="boss-attribute">{(bossList[boss].name)}</div>
                <div className="boss-attribute">{(bossList[boss].level)}</div>
                <div className="boss-attribute">{(bossList[boss].health)}</div>
                <div className="boss-attribute">{(bossList[boss].attack)}</div>
                <div className="boss-attribute">{(bossList[boss].region)}</div>
                <div className="boss-attribute">{(bossList[boss].release)}</div>
                <div className="boss-attribute">{(bossList[boss].hasPet)}</div>
                </div>
            )}
        </div>
        </>
        )
    }
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