import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../graphql/mutation';

import './styles.css';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [createUser] = useMutation(CREATE_USER_MUTATION);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data } = await createUser({
            variables: {
                user: {
                    email,
                    name
                }
            }
        })

        console.log("Response", data.createUser);
    }

    return (
        <header className="header-signin">
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
                <input className="input-submit-form" type="submit" value="SEND" />
            </form>
        </header>
    )
}

export default SignIn;