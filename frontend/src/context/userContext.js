import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER_SESSION, CREATE_USER_MUTATION } from '../graphql/mutation';

const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
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

            setUser({
                id: data.userSession.id,
                email: data.userSession.email,
                name: data.userSession.name
            });
            setIsLoggedIn(!isLoggedIn);
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

            setUser({
                id:  data.createUser.id,
                email: data.createUser.email,
                name: data.createUser.name,
            });
            setIsLoggedIn(!isLoggedIn);
        } catch (err) {
            setError({ 
                hasError: !error.hasError,
                message: err.message
            });
            console.error(error.message);
        }
    }

    const handleLogout = () => {
        setUser({});
        setIsLoggedIn(false);
    }

    React.useEffect(() => {
        if(error.hasError) {
            setTimeout(() => {
                setError({
                    hasError: false,
                    message: '',
                })
            }, 5000)
        }
    }, [error])

    return (
        <UserContext.Provider value={{ user, isLoggedIn, handleLogin, error, handleCreateAccount, handleLogout, setError }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => React.useContext(UserContext)