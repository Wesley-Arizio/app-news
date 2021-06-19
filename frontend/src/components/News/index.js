
import React from 'react';
import { useNewsContext } from '../../context/newsContext';


import NewsItem from './NewsItem';
import NewsModal from './NewsModal';

import './styles.css'

const News = () => {
    const [isNewsModalOpened, setIsNewsModalOpened] = React.useState(false);
    const [selectedNews, setSelectedNews] = React.useState(null);

    const { error, loading, news} = useNewsContext();

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

    return (
        <section className="main-section">
            <h1>News</h1>
            {
                !loading && !error &&
                    <React.Fragment>
                        {
                            news.map((item, index) => (
                                <NewsItem key={index} title={item.title}  newsId={item.id} openModal={handleOpenNewsModal} />
                            ))
                        }

                        {isNewsModalOpened && <NewsModal newsId={selectedNews} close={handleCloseNewsModal} />}
                    </React.Fragment>
            }
        </section>
    )
}

export default News;