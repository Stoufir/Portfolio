import { NavLink } from 'react-router-dom'
import Logo from '../assets/man-9031574_1280.png'



function Header() {
    return (
        <header className='header'>
            <nav className='navigation'>
                <ul>
                <NavLink to ="/" className={({isActive}) => (isActive ? "underline" : "")} >
                <li>Accueil</li>
                </NavLink>
                <NavLink to ="/about" className={({isActive}) => (isActive ? "underline" : "")} >
                <li>A propos</li>
                </NavLink>
                <NavLink to ="/gallery" className={({isActive}) => (isActive ? "underline" : "")} >
                <li>Projets</li>
                </NavLink>
                <NavLink to ="/contact" className={({isActive}) => (isActive ? "underline" : "")} >
                <li>Contact</li>
                </NavLink>
                </ul>
                </nav>
        </header>
    )
}

export default Header

