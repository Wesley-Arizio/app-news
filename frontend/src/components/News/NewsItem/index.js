import React from 'react';

import './styles.css';

const NewsItem = ({ title, openModal, newsId }) => {
    return (
        <div className="container-news-item" onClick={() => openModal(newsId)}>
            <h5>{title}</h5>
        </div>
    )
}

export default NewsItem;