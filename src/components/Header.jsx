import { NavLink } from 'react-router-dom'



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
                <NavLink to ="/projects" className={({isActive}) => (isActive ? "underline" : "")} >
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

