import React from 'react';
import { useUserContext } from '../../context/userContext';
import ErrorNotification from '../Error';
import Options from '../UserOptions';

import './styles.css';

const FormUserAccount = ({ buttonValue, option, selected, setSelected }) => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    const { error, handleLogin, handleCreateAccount, setError } = useUserContext();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(email.trim().lenght < 3 || name.trim().length < 3) {
            setError({
                hasError: true,
                message: 'Fields Cannot be empty'
            })
        } else {
            const fn = option === 'sign in' 
                ? handleLogin 
                : handleCreateAccount;
            
                await fn({email, name})
        }
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
            {error.hasError && <ErrorNotification message={error.message} />}
            { selected !== '' && <Options onPressed={setSelected}/>}
        </header>
    )
}

export default FormUserAccount;