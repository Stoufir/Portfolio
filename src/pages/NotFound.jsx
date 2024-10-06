import { NavLink } from 'react-router-dom'

function NotFound () {
    return (
        <div>
            <div className='error-message'>
                <p className='error'>404</p>
                <p className='message'>Oups! La page que vous demandez n'existe pas</p>
             <NavLink to ="/" className='home'>Retourner sur la page d'accueil</NavLink>
             </div>
        </div>
    )
}

export default NotFound;