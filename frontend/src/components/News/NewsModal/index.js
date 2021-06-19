import React from 'react';
import { FaTimes } from 'react-icons/fa';

import './styles.css'

const NewsModal = ({ news, close }) => {
    return (
        <div className="container-modal">
            <div className="modal">
                <header className="modal-header">
                    <h1>{news.title}</h1>
                    <FaTimes size={20} color={`#373f41`} onClick={() => close()} />
                </header>
                <br />
                <p>{news.body}</p>
            </div>
        </div>
    )
}

export default NewsModal;