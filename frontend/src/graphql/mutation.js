import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
    mutation createUser($user: CreateUserInput!) {
        createUser(user: $user) {
            id
            email
            name
        }
    }
`;

export const CREATE_USER_SESSION = gql`
    mutation userSession($email: String!) {
        userSession(email: $email) {
            id
            email
            name
        }
    }
`;

export const CREATE_NEWS = gql`
    mutation createNews($data: CreateNewsInput!) {
        createNews(data: $data) {
            id
            title
            body
            user_id
        }
    }
`;

export const DELETE_NEWS = gql`
    mutation deleteNews($newsId: ID!, $userId: ID!) {
        deleteNews(newsId: $newsId, userId: $userId)
    }
`;

export const UPDATE_NEWS = gql`
    mutation updateNews($newsId: ID!, $userId: ID!, $newsDataToUpdate: UpdateNewsInput!) {
        updateNews(newsId: $newsId, userId: $userId, newsDataToUpdate: $newsDataToUpdate) {
            title
            body
            id
            user_id
            updated_at
            created_at
        }
    }
`;