import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SPECIFIC_NEWS } from '../../../graphql/query';
import { FaTimes } from 'react-icons/fa';

import './styles.css'

const NewsModal = ({ newsId, close }) => {

    const { loading, data }  = useQuery(GET_SPECIFIC_NEWS, {
        variables: {
            newsId,
        }
    });

    return (
        <div className="container-modal">
            {!loading && (
            <div className="modal">
                <header className="modal-header">
                    <h1>{data.newsData.news.title}</h1>
                    <FaTimes size={20} color={`#373f41`} onClick={() => close()} />
                </header>
                <br />
                    <p>By {data.newsData.user.name} at {data.newsData.news.created_at}</p>
                <br />
                <p>{data.newsData.news.body}</p>
            </div>
            )}
        </div>
    )
}

export default NewsModal;