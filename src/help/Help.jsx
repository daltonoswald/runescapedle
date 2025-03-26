/* eslint-disable react/prop-types */
import './help.css'

export default function Help({ setOpenHelp }) {

    return (
        <div className='help-module'>
            <div className='help-top'>
                <h1>About</h1>
                <button className='close-key-button' onClick={() => setOpenHelp(false)}>X</button>
            </div>
            <p>Inspired by <a href='https://www.nytimes.com/games/wordle/index.html'>Wordle</a>, each day there is a new Oldschool Runescape boss to guess.</p>
            <p>Guess a boss and then adjust your next guess based on how close your previous guesses were.</p>
            <p>Share your results and come back each day to play!</p>
            <p>Puzzle resets are midnight.</p>
        </div>
    )
}