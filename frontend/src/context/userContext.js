import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER_SESSION, CREATE_USER_MUTATION } from '../graphql/mutation';

const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState({});
    const [error, setError] = React.useState({
        hasError: false,
        message: '',
    });

    const [userSession] = useMutation(CREATE_USER_SESSION);
    const [createUser] = useMutation(CREATE_USER_MUTATION);

    const handleLogin = async (user) => {
        try {
            const { data } = await userSession({
                variables: {
                    email: user.email,
                }
            });
    
            setUser(data.userSession);
        } catch (err) {
            setError({ 
                hasError: !error.hasError,
                message: err.message
            });
            console.error(err.message);
        }
    }

    const handleCreateAccount = async (user) => {
        try {
            const { data } = await createUser({
                variables: {
                    user: {
                        email: user.email,
                        name: user.name
                    }
                }
            });
    
            setUser(data.createUser);
        } catch (err) {
            setError({ 
                hasError: !error.hasError,
                message: err.message
            });
            console.error(error.message);
        }
    }

    return (
        <UserContext.Provider value={{ user, handleLogin, error, handleCreateAccount }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => React.useContext(UserContext)