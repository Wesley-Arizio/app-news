import React from 'react';
import { useUserContext } from '../../context/userContext';

import './styles.css'
import '../FormUserAccount/styles.css';

const WelcomeAuthor = () => {

    const { user, handleLogout } = useUserContext();
    return (
        <header className="container-welcome-author">
            <h1>
                Olá&nbsp;
                <p className="header-username"> {user.name || 'random'}
                </p>, Seja Bem Vindo!
            </h1>

            <input 
                className="input-submit-form"
                type="button"
                value="Logout"
                onClick={handleLogout}
            />
        </header>
    )
}

export default WelcomeAuthor;