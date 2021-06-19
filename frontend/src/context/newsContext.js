/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_NEWS } from '../graphql/query';

const NewsContext = React.createContext({});

export const NewsContextProvider = ({ children }) => {
    const [news, setNews] = React.useState([]);
    const { loading, error, data } = useQuery(GET_NEWS);

    React.useEffect(() => {
        if(!loading && !error) {
            setNews(() => [...data.news]);
        }
    }, [loading, error]);

    return (
        <NewsContext.Provider value={{news, setNews, loading, error}}>
            { children }
        </NewsContext.Provider>
    )
}

export const useNewsContext = () => React.useContext(NewsContext);