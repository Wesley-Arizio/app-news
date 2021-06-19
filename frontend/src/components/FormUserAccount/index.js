import React from 'react';
import { useUserContext } from '../../context/userContext';

import './styles.css';

const FormUserAccount = ({ buttonValue, option }) => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    const { error, handleLogin, handleCreateAccount} = useUserContext();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const fn = option === 'sign in' 
            ? handleLogin 
            : handleCreateAccount;

        await fn({email, name})
    }

    if(error.hasError) {
        return <h1>ERROR</h1> // user not found or other errur
    }

    return (
        <header className="header-form-user-account">
            <form onSubmit={handleSubmit}>
                <input
                    className="input-form"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    className="input-form"
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input className="input-submit-form" type="submit" value={buttonValue} />
            </form>
        </header>
    )
}

export default FormUserAccount;