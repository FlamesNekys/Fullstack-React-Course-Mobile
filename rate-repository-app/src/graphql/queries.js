import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    description
                    forksCount
                    fullName
                    language
                    ownerAvatarUrl
                    ratingAverage
                    reviewCount
                    stargazersCount
                }
            }
        }
    }
`;

export const SIGN_IN = gql`
    mutation signIn($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;

export const ME = gql`
    query {
        me {
            id
            username
        }
    }
`;
