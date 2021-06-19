import { gql } from '@apollo/client';

export const GET_NEWS = gql`
    query news {
        news {
            id
            title
        }
    }
`;

export const GET_SPECIFIC_NEWS = gql`
    query newsData($newsId: ID!) {
        newsData(newsId: $newsId){
            news {
                title
                body
                created_at
                updated_at
            }
            user {
                email
                name
            }
        }
    }
`;