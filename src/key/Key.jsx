import './key.css';

export default function Key( {openKey, setOpenKey }) {

    return (
        <div className="key-modal">
            <div className='key-top'>
                <h3>Key</h3>
                <button className='close-key-button' onClick={() => setOpenKey(false)}>X</button>
            </div>
                <div className='key-container'>
                    <div id="correct" className='key'>Correct</div>
                    <div id='incorrect' className='key'>Incorrect</div>
                    <div id='almost' className='key'>Partially Correct</div>
                    <div id='higher' className='key'>Corecct answer is higher</div>
                    <div id='lower' className='key'>Corecct answer is lower</div>
                </div>
        </div>
    )
}