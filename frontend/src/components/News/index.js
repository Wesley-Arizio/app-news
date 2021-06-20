
import React from 'react';
import { useNewsContext } from '../../context/newsContext';
import { useUserContext } from '../../context/userContext';
import { AiFillPlusCircle } from 'react-icons/ai';


import NewsItem from './NewsItem';
import NewsModal from './NewsModal';
import CreateOrEditNewsModal from '../CreateOrEditNewsModal';


import './styles.css'

const News = () => {
    const [isNewsModalOpened, setIsNewsModalOpened] = React.useState(false);
    const [isCreateNewsModalOpened, setIsCreateNewsModalOpened] = React.useState(false);
    const [isEditingNewsModalOpened, setIsEditingNewsModalOpened] = React.useState(false);
    const [selectedNews, setSelectedNews] = React.useState(null);

    const { error, loading, news} = useNewsContext();
    const { isLoggedIn } = useUserContext();

    if(loading) {
        return <h1>LOADING</h1>
    }

    if(error) {
        return <h1>ERROR</h1>
    }

    const handleOpenNewsModal = (newsId) => {
        setIsNewsModalOpened(true);
        setSelectedNews(newsId);
    }

    const handleCloseNewsModal = () => {
        setIsNewsModalOpened(false);
        setSelectedNews({});
    }

    const handleCreateNewsModal = () => {
        setIsCreateNewsModalOpened(!isCreateNewsModalOpened);
    }

    const handleEditingNewsModal = () => {
        setIsEditingNewsModalOpened(!isEditingNewsModalOpened)
    }

    return (
        <section className="main-section">
            <div className="header-news">
                <h1>News</h1>
                {isLoggedIn && <AiFillPlusCircle size={35} color="#3c64b1" onClick={() => handleCreateNewsModal()}/>}
            </div>
            {
                !loading && !error &&
                    <React.Fragment>
                        {
                            news.map((item, index) => (
                                <NewsItem 
                                    key={index} 
                                    title={item.title}  
                                    newsId={item.id} 
                                    authorId={item.user_id} 
                                    openModal={handleOpenNewsModal} 
                                    openEditNewsModal={handleEditingNewsModal}
                                />
                            ))
                        }

                        {isNewsModalOpened && <NewsModal newsId={selectedNews} close={handleCloseNewsModal} />}
                        {isCreateNewsModalOpened && <CreateOrEditNewsModal close={handleCreateNewsModal} option="create" />}
                        {isEditingNewsModalOpened && <CreateOrEditNewsModal close={handleEditingNewsModal} option="edit" />}
                    </React.Fragment>
            }
        </section>
    )
}

export default News;