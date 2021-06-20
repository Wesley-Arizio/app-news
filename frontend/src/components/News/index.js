
import React from 'react';
import { useNewsContext } from '../../context/newsContext';
import { useUserContext } from '../../context/userContext';
import { AiFillPlusCircle } from 'react-icons/ai';


import NewsItem from './NewsItem';
import NewsModal from './NewsModal';
import CreateNewsModal from '../CreateNewsModal';


import './styles.css'

const News = () => {
    const [isNewsModalOpened, setIsNewsModalOpened] = React.useState(false);
    const [isCreateNewsModalOpened, setIsCreateNewsModalOpened] = React.useState(false);
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

    const handleOpenCreateNewsModal = () => {
        setIsCreateNewsModalOpened(!isCreateNewsModalOpened);
    }

    return (
        <section className="main-section">
            <div className="header-news">
                <h1>News</h1>
                {isLoggedIn && <AiFillPlusCircle size={35} color="#3c64b1" onClick={() => handleOpenCreateNewsModal()}/>}
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
                                />
                            ))
                        }

                        {isNewsModalOpened && <NewsModal newsId={selectedNews} close={handleCloseNewsModal} />}
                        {isCreateNewsModalOpened && <CreateNewsModal close={handleOpenCreateNewsModal} option="create" />}
                    </React.Fragment>
            }
        </section>
    )
}

export default News;