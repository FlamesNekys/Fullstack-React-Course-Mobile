import { gql } from '@apollo/client';

export const REPOSITORY_INFO = gql`
    fragment RepositoryInfo on Repository {
        id
        description
        forksCount
        fullName
        language
        ownerAvatarUrl
        ratingAverage
        reviewCount
        stargazersCount
    }
`;
