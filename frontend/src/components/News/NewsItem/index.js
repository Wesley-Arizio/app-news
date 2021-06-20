import React from 'react';
import { useUserContext } from '../../../context/userContext';
import { useNewsContext } from '../../../context/newsContext';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';

import './styles.css';

const AuthorMenu = ({ newsId, openEditNewsModal }) => {
    const { handleDeleteNews } = useNewsContext();

    const handleDelete = async () => {
        await handleDeleteNews(newsId)
    }

    return (
        <div className="container-author-menu">
            <MdDelete size={20} color="#3c64b1" onClick={() => handleDelete()} />
            <AiFillEdit size={20} color="#3c64b1" onClick={() => openEditNewsModal()} />
        </div>
    )
}

const NewsItem = ({ title, authorId, openModal, newsId, openEditNewsModal }) => {
    const { user } = useUserContext();
    const { news, setNewsToEdit } = useNewsContext();

    const handleEditNewsModal = () => {
        const [newsToEdit] = news.filter(item => item.id === newsId);
        console.log(newsToEdit)
        setNewsToEdit(newsToEdit);
        openEditNewsModal();
    }


    return (
        <div className="container-news-item" >
            <div className={`open-news ${user.id === authorId ? 'medium' : 'full-size'}`} onClick={() => openModal(newsId)}>
                <h5>{title}</h5>
            </div>

            {user.id === authorId && <AuthorMenu newsId={newsId} openEditNewsModal={handleEditNewsModal} />}
        </div>
    )
}

export default NewsItem;