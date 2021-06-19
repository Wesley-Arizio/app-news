import React from 'react';

import './styles.css';

const NewsItem = ({ title, body, openModal }) => {
    return (
        <div className="container-news-item" onClick={() => openModal({title, body})}>
            <h5>{title}</h5>
        </div>
    )
}

export default NewsItem;