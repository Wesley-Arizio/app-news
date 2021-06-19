import React from 'react';
import { useNewsContext } from '../../context/newsContext';

import { FaTimes } from 'react-icons/fa';
import ErrorNotification from '../Error';

import '../News/NewsModal/styles.css';
import './styles.css'
import '../FormUserAccount/styles.css'


const CreateNewsModal = ({ close, option }) => {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const { newsHasError, setNewsHasError, handleCreateNews, handleEditNews } = useNewsContext();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(title.trim().lenght < 3 || body.trim().length < 3) {
            setNewsHasError({
                hasError: true,
                message: 'Fields Cannot be empty'
            })
        } else {
            const fn = option === 'create' 
                ? handleCreateNews 
                : handleEditNews;
            
                await fn({title, body})
        }
    }   

    return (
        <div className="container-modal">
            <div className="modal">
                <header className="modal-header">
                    <h1>Create Post</h1>
                    <FaTimes size={20} color={`#373f41`} onClick={() => close()} />
                </header>

                <form className="form-create-news" onSubmit={(event) => handleSubmit(event)}>
                    <input
                        className="input-form create"
                        id="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        type="text"
                        placeholder="News Title"
                    />
                    <textarea
                        className="input-form create"
                        id="description"
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                        placeholder="News Description"
                    />

                    <input className="input-submit-form" type="submit" value="Create News" />
                </form>
                {newsHasError.hasError && <ErrorNotification message={newsHasError.message} />}
            </div>
        </div>
    )
}

export default CreateNewsModal;