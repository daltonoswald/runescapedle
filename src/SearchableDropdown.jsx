/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react";
import './searchableDropdown.css'

const SearchableDropdown = ({
    options, label, id, selectedVal, handleChange, handleGuess, gameOver
}) => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        // document.addEventListener('click', toggle);
        document.addEventListener('click', () => {setIsOpen(false)});
    }, []);

    const selectOption = (option) => {
        setQuery(() => "");
        // handleChange(option[label]);
        // setIsOpen((isOpen) => !isOpen);
        handleGuess(option[label]);
        setIsOpen(false)

        const guessedNameValue = option[label];
        let indexVal = options.findIndex(x => x.name === `${guessedNameValue}`)
        // Removes the selected boss from the guessable list
        options.splice(indexVal, 1);
    }

    function toggle(e) {
        setIsOpen(e && e.target === inputRef.current);
    }

    const getDisplayValue = () => {
        if (query) return query;
        if (selectedVal) return selectedVal;

        return ""
    }

    const filter = (options) => {
        return options.filter(
            (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1,
        )
    };

    return (

        <div className="dropdown">
        <div className="control">
            <div className="selected-value">
        <input 
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            onChange={(e) => {
                setQuery(e.target.value);
                handleChange(null);
                setIsOpen(true)
            }}
            onClick={() => setIsOpen(false)}
            disabled={gameOver}
            />
        </div>
        <div className={`arrow ${isOpen ? "open" : ""}`}></div>
        </div>

        <div className={`options ${isOpen ? "open" : ""}`}>
            {filter(options).map((option, index) => {
                return (
                    <div 
                        id={option.name}
                        onClick={() => selectOption(option)}
                        className={`option ${
                            options[label] === selectedVal ? "selected" : ""
                        }`}
                        key={`${id}-${index}`}
                    >
                        <img src={(option.image)} className="boss-image"/> 
                        {option[label]} 
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default SearchableDropdown