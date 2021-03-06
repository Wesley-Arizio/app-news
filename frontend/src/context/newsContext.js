/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_NEWS } from '../graphql/query';
import { CREATE_NEWS, DELETE_NEWS, UPDATE_NEWS } from '../graphql/mutation';
import { useUserContext } from './userContext';

const NewsContext = React.createContext({});

export const NewsContextProvider = ({ children }) => {

    const { user } = useUserContext();

    const [news, setNews] = React.useState([]);
    const [newsToEdit, setNewsToEdit] = React.useState();
    const [newsHasError, setNewsHasError] = React.useState({
        hasError: false,
        message: '',
    })

    const { loading, error, data } = useQuery(GET_NEWS);
    const [createNews] = useMutation(CREATE_NEWS);
    const [deleteNews] = useMutation(DELETE_NEWS)
    const [updateNews] = useMutation(UPDATE_NEWS);

    React.useEffect(() => {
        if(!loading && !error) {
            setNews(() => [...data.news]);
        }
    }, [loading, error]);

    React.useEffect(() => {
        if(newsHasError.hasError) {
            setTimeout(() => {
                setNewsHasError({
                    hasError: false,
                    message: '',
                })
            }, 5000)
        }
    }, [newsHasError])

    const handleCreateNews = async (newsToCreate) => {
        try {
            const { data } = await  createNews({
                variables: {
                    data: {
                        userId: user.id,
                        title: newsToCreate.title,
                        body: newsToCreate.body
                    }
                }
            });

            setNews((news) => [...news, data.createNews]);
       } catch (err) {
            setNewsHasError({
                hasError: true,
                message: err.message
            });
            console.error(err.message);
        }
    }

    const handleEditNews = async ({title, body}) => {
        try {
            const { data } = await  updateNews({
                variables: {
                    newsId: newsToEdit.id,
                    userId: user.id,
                    newsDataToUpdate: {
                        title,
                        body,
                    }
                }
            });

            const listWithOldNews = news.filter(item =>item.id !== newsToEdit.id);
            const currentNewsList = [...listWithOldNews, data.updateNews];

            setNews(() => [...currentNewsList])

        } catch (err) {
            setNewsHasError({
                hasError: true,
                message: err.message
            });
            console.error(err.message);
        }
    }

    const handleDeleteNews = async (newsId) => {
        try {
            const { data } = await  deleteNews({
                variables: {
                    newsId,
                    userId: user.id,
                }
            });

            if(data.deleteNews) {
                const withoutDeletedNews = news.filter(item => item.id !== newsId);

                setNews(() => [...withoutDeletedNews]);
            }
       } catch (err) {
            setNewsHasError({
                hasError: true,
                message: err.message
            });
            console.error(err.message);
        }
    }

    return (
        <NewsContext.Provider value={{
            news,
            setNews,
            loading,
            error,
            setNewsHasError,
            newsHasError,
            handleCreateNews,
            handleEditNews,
            handleDeleteNews,
            setNewsToEdit,
            newsToEdit
        }}>
            { children }
        </NewsContext.Provider>
    )
}

export const useNewsContext = () => React.useContext(NewsContext);