/* eslint-disable react/prop-types */
import keyIcon from '../assets/key.svg'
import githubIcon from '../assets/github-original.svg'
import linkedinIcon from '../assets/linkedin-original.svg'
import cottageIcon from '../assets/cottage.svg'
import './nav.css'

function Nav({ setOpenKey, guessCount }) {

    function toggleKey(e) {
        e.preventDefault()
        if (guessCount > 0) {
            setOpenKey(open => !open)
        } else {
            return
        }
    }

    return (
        <div className='nav'>
            <div className='nav-left'>
                <img src={keyIcon} className='nav-icon' onClick={toggleKey} alt='key icon' />
            </div>
            <div className='nav-right'>
                <a target='_blank' href={'https://github.com/daltonoswald/runescapedle'}>
                    <img src={githubIcon} className='nav-icon' alt='github icon' />
                </a>
                <a target='_blank' href={'https://linkedin.com/in/daltonoswald'}>
                <img src={linkedinIcon} className='nav-icon' alt='linkedin icon' />
                </a>
                <a target='_blank' href={'https://daltonoswald.netlify.app/'}>
                <img src={cottageIcon} className='nav-icon' alt='dalton oswald homepage icon' />
                </a>
            </div>
        </div>
    )
}

export default Nav