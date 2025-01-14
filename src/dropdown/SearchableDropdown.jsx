/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react";
import './searchableDropdown.css'

const SearchableDropdown = ({
    options, label, id, selectedVal, handleChange, handleGuess, status, gameOver
}) => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (query === "") {
          setIsOpen(false)
        } else {
          setIsOpen(true)
        }
      })

    useEffect(() => {
        document.addEventListener('click', () => {setIsOpen(false)});
    }, []);

    const selectOption = (option) => {
        setQuery(() => "");
        handleGuess(option[label]);
        setIsOpen(false)

        const guessedNameValue = option[label];
        let indexVal = options.findIndex(x => x.name === `${guessedNameValue}`)
        // Removes the selected boss from the guessable list
        options.splice(indexVal, 1);
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, "4000");
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
            // placeholder="Guess a boss..."
            placeholder={status}
            value={getDisplayValue()}
            name="searchTerm"
            onChange={(e) => {
                setQuery(e.target.value);
                handleChange(null);
                setIsOpen(true)
            }}
            onClick={() => setIsOpen(false)}
            disabled={disabled || gameOver}
            />
        </div>
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
                        <div className='boss-image-container'>
                            <img src={(option.image)} className="boss-image"/>
                        </div>
                        {option[label]} 
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default SearchableDropdown