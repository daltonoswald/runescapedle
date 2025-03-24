/* eslint-disable react/prop-types */
import keyIcon from '../assets/key.svg'
import './nav.css'

function Nav({ setOpenKey }) {

    return (
        <div className='nav'>
            <div className='nav-left'>
                <img src={keyIcon} onClick={() => setOpenKey(open => !open)}/>
            </div>
        </div>
    )
}

export default Nav